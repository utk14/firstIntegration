import React, { Component } from 'react';
import logo from './styles/images/gitlab.png';
import Button from '@material-ui/core/Button';
import './styles/App.css';


class App extends Component {

  //remove test function if not in use
  test() {
    const url = "https://github.com/ishawakankar/test2.git";
    fetch(`/deploy`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: url
    })
      .then(res => { return res.json() })
      .then(res => console.log(res))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button className="App-link" id="loginButton" href={`/auth`}> 
          LOGIN </Button>
          {/* <button onClick={this.test}> test </button> */}
        </header>
      </div>
    );
  }
}

export default App;
