/* eslint prefer-destructuring:0 */
/* eslint no-underscore-dangle:0 */
/* eslint import/no-unresolved:0 */

const fetch = require('isomorphic-fetch');
const express = require('express');
const app = express();
// const logout = require('express-passport-logout');
let status = false;
const bodyParser = require('body-parser');
const {
  Observable, zip, fromEvent, merge,
} = require('rxjs');
const {
  pluck, map, concatMap, tap,
} = require('rxjs/operators');
const { spawn } = require('child_process');
const passport = require('passport');

const port = process.env.PORT || 5000;
const sockets = require('socket.io');
const config = require('config');
const path = require('path');
const expressWinston = require('express-winston');
const winston = require('winston');
const fs = require('fs');
const session = require('express-session');
const appDb = require('./db/db.apps');
const passportSetup = require('./passport');
const authRouter = require('./routes/authentication');
const appModel = require('./db/models/apps');
const hook = require('./webhook');
const yaml = require('yamljs')


app.use(express.static(path.join(__dirname, './build')));
app.use(express.static(path.join(__dirname, './logs')));

// app.use(expressWinston.logger({
//   transports: [
//     new winston.transports.Console({
//       json: true,
//       colorize: true,
//     }),
//     new winston.transports.File({
//       filename: 'access.log',
//       level: 'info',
//     }),
//   ],
// }));

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.use(session({
  secret: 'data',
  cookie: {
    httpOnly: false,
  },
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);

const server = app.listen(port, () => {
  console.log(`listening on port ${process.env.HPORT} for app${config.get('rxjs.app')}`);
});

const io = sockets(server);

// ////////////////////////////////////////////////////////////////////////////////
app.post('/deploy', (req, res) => {

  let repoUrl, repo, appID;

  const requestResponseObservable = Observable.create((o) => {
    o.next({ req, res });
  });

  const request = requestResponseObservable.pipe(pluck('req'));

  console.log('RES BODY-----------------------:', req.body);

  const url = request.pipe(
    pluck('body'),
    pluck('collector'),
    pluck('url'),
    tap((urlOld) => {
      console.log('url entered is *************** ', urlOld);
    }),
  );

  const repoName = url.pipe(map(urlOld => urlOld.split('/').pop().toLowerCase()),
    tap((repoOld) => {
      console.log('inside repoOld>>>>>>>>>>> ', repoOld);
    }));

    //pass the zipped function to a function and write whole code there only

  const zipped = zip(url, repoName);

  const emission = zipped.pipe(concatMap((data) => {
    console.log('INSIDE EMISSION ************')
    const command = spawn('./script.sh', [data[0], data[1]]);
    repoUrl = data[0];
    repo = data[1];
    const stdout = fromEvent(command.stdout, 'data');
    const stderr = fromEvent(command.stderr, 'data');
    console.error("standard error.......................",command.stderr);
    return merge(stdout, stderr).pipe(map(dataOld => dataOld.toString('utf-8')));
  }));

  const logs = emission.pipe(tap((x) => {
    fs.stat('logs', (err) => {
      if (err) {
        fs.mkdir('logs', (errOld) => {
          console.error('error occured while creating directory', errOld);
        });
      }
      const data = `[  ${new Date()} ]:- ${x}`;
      fs.writeFile(`logs/${repo}.log`, data, { flag: 'a' }, (errOld) => {
        if (errOld) throw errOld;
        console.log('The file has been saved!');
      });
    });
  }));

  function storeData(urlRec, appName, appId, statusOld) {
    appDb.findAndUpdateApp({
      appId,
      userId: 'admin',
      app_name: appName,
      status: statusOld,
      app_URL: urlRec,
    });
  }

  const databaseEntry = logs.pipe(tap((x) => {
    appID = x.split(' ')[x.split(' ').length - 1];
    if (String(x).includes('Successfully built')) {
      appModel
        .findOne({ app_URL: repoUrl }, (err, success) => {
          if (success) {
            appModel.findOneAndUpdate({ app_URL: repoUrl }, { appId: appID, status: 'true', timestamp: Date.now() }, {}, () => {
              console.log('IF INSIDE IF CONDITION');
            });
          } else {
            storeData(repoUrl, repo, appID, 'true');
          }
        });
    } else {
      storeData(repoUrl, repo, -1, 'false');
    }
  }));

  databaseEntry.subscribe(
    (x) => {
      console.log('data', x);
      io.emit('chat', x);
    },
    (e) => {
      console.error('error object', e);
    },
    () => console.log('completed'),
  );

  res.json({ status: 'ok' });
  
  // hook(req.body.collector.username, req.body.collector.password, repo);

  // if (req.body.collector.username !== '' && 
  //     req.body.collector.password !== '' && 
  //     appModel.find({'app_URL':repoUrl})){
  // }

});
// ///////////////////////////////////////////////////////////////

app.post('/github_push', (req, res) => {
  console.log('inside github post...........................................................................');
  console.log('hello: ********************** ', req.body);
});

app.get('/apps', (req, res) => {
  appDb.getUserApps()
    .then((data) => {
      res.json(data);
    })
    .catch(err => console.log(err));
});


function ensureLoggedIn() {
  return function (req, res, next) {
    console.log('in ensure');
    console.log(req.isAuthenticated());

    if (req.isAuthenticated()) {
      console.log('next because true');
      status = true;
      next();
    } else {
      console.log('not true so redirect');
      res.redirect('/');
    }
  };
}

app.get('/profile', ensureLoggedIn(), (req, res) => {
  console.log('inside profile');

  
  // console.log(res)
  console.log(status);
  console.log('now data');

  let testdata = [];
  testdata = passportSetup()._json;
  if (testdata.length === 0) {
    console.log('null');
  }

  if (status) res.json(testdata);

  else {
    console.log('redirecting / from status');
    res.redirect('/');
  }
});


app.get('/logout', (req, res) => {
  res.clearCookie('connect-sid');
  req.logout();
  res.redirect('/');
});


app.get('/downloadLog/:name', (req, res) => {
  //   console.log(req.params.name);
  //   res.send("file is being downloaded")
  console.log('req.params.name is : ', req.params.name);
  res.download(`${__dirname}/logs/${req.params.name}.log`);
});

// app.use(expressWinston.errorLogger({
//   transports: [
//     new winston.transports.Console({
//       json: true,
//       colorize: true,
//     }),
//     new winston.transports.File({
//       filename: 'access.log',
//       level: 'error',
//     }),
//   ],
// }));


module.exports.app = app;
