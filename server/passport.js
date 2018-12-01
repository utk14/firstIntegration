/* eslint no-underscore-dangle:0 */

const passport = require('passport');
const GitlabStrategy = require('passport-gitlab2').Strategy;
const env = require('./env_config');

let userprofile = [];
// const keys = require('./config/keys');
const db = require('./db/db');
const { addUser } = require('./db/db.users');
// const config = require('config');

db();
console.log('auth', env.HPORT);

passport.serializeUser((profile, done) => {
  done(null, profile);
});

passport.deserializeUser((profile, done) => {
  done(null, profile);
});

passport.use(new GitlabStrategy({
  clientID: '597dc387087612354f380e76c4d6ce12c8ec7a1a34866df20366be0cafb8e50a',
  clientSecret: '3fe1a5163594512a06b839139d1e49e1eb0b2162f75f9b74c58575b89baef655',
  callbackURL: `http://localhost:${process.env.HPORT}/auth/gitlab`,
},

((token, tokenSecret, profile, done) => {
  const reqObj = {
    userId: profile.id,
    userName: profile.username,
    displayName: profile.displayName,
    email: profile._json.email,
    profileUrl: profile.profileUrl,
  };
  // console.log(profile)
  const obs = addUser(reqObj);
  userprofile = profile;
  obs.subscribe(doc => console.log('subscribe ', doc));
  done(null, profile);
}
)));

module.exports = function display() {
  return userprofile;
};
