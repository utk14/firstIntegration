/*eslint react/jsx-filename-extension: 0 */
/*eslint react/prop-types: 0 */
/* eslint array-callback-return:0 */

import "isomorphic-fetch";
import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Clear from '@material-ui/icons/Clear';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import moment from 'moment';

import HomePageComponent from './HomePageComponent';
import '../styles/ListUrlComponent.css';
import * as Rx from 'rxjs-compat'

// const data = require('../logs/client-server-db-docker.log');

const styles = theme => ({
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class ListUrlComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listdata: [],
      data: [],
      expanded: {}
    };
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleExpandClick = (cardNumber) => {
    this.setState({
      expanded: {
        ...this.state.expanded,
        [cardNumber]: !this.state.expanded[cardNumber]
      }
    });
  };

  componentWillMount() {
    Rx.Observable.fromPromise(fetch('/apps').then((data) => data.json()))
      .subscribe((data) => {
        console.log("data fetched", data);
        this.setState({
          data: data
        })
      });
  }
//name of the test function
  test(x) {
    console.log('inside test function', x);
    fetch(`/downloadLog/${x}`)
      .then((data) => {
        data.blob();
        console.log("data: ", data)
        window.open(data.url)
      })
      .then(resp => {
        console.log("this is resp: ", resp);
        return resp;
      });
  }

  render() {
    const { data, expanded } = this.state;
    const { classes } = this.props;
    // this.state.data.map((x, i) => {
    //   x.timestamp = moment(x.timestamp).fromNow();
    // }
    // )
    console.log(data)
    return (
      <div>
        <HomePageComponent />
        {data.map((x, i) =>
          <div className="root">
            <Card className="card">
              {console.log('name is: ', x.app_name)}


              <CardHeader
                action={
                  <Avatar aria-label="Deployed" className="checkavatar" 
                  style={{ color: "yellowgreen", marginRight: 40, marginTop: 13 }} >
                  
                    {console.log("id check: ", typeof (x.appId), " ", x.appId)}
                    {x.appId === "-1" ?
                      <Clear style={{ color: "red" }} /> :
                      <CheckCircle style={{ color: "green" }} />
                    }
                  </Avatar>
                }
                className="appinfo"
                title={x.app_name}
                subheader={moment(x.timestamp).fromNow()}

              />
          

              {/* <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: expanded[i],
                })}
                //className={this.state.expanded[i] ? classes.expandOpen : "toggleContent-closed"}
                onClick={() => this.handleExpandClick(i)}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton> */}



              <Button variant="persistent"
                className="download" onClick={() => this.test(x.app_name)}>
                Download logs  </Button>

              <Collapse in={expanded[i]} timeout="auto" unmountOnExit>
                <CardContent>
                </CardContent>
              </Collapse>


            </Card>
          </div>
        )
        }
      </div>
    );
  }
}
//export default (ListUrlComponent);
export default withStyles(styles)(ListUrlComponent);