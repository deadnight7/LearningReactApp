import React, { Component } from 'react';
import Ninjas from './Ninjas';
class App extends Component {
  
  render() {
    return (
      <div>
        <p>App Root.!</p>
        <br/>
        <Ninjas name="Ryu" age="30" belt="black"/>
        <Ninjas name="Chirag" age="27" belt="white"/>
        <Ninjas name="Ryan" age="30" belt="black"/>

      </div>
    );
  }
}

export default App;

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