import React, { Component } from 'react';

class Ninjas extends Component {
  
  render() {
    console.log(this.props);
    
    //Destruturing props
    const {name , age, belt} = this.props;
    return (
      <div>
      <hr/>
      <p>Ninja</p>

      <div>Name : {name}</div>
      <div>Age : {age}</div>
      <div>Belt : {belt}</div>
      </div>
    );
  }
}

export default Ninjas;

/**
 * <!--
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      -->
 */