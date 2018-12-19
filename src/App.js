import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja'

class App extends Component {
  
  state = {
    ninjas : [
      {name: "Ryu", age : 30, belt : "black", id: 1 },
      {name: "Chirag", age : 30, belt : "Yellow", id: 2 },
      {name: "Crystal", age : 30, belt : "black", id: 3 }
    ]
  }
  render() {
    return (
      <div>
        <p>App Root.!</p>
        <br/>
        <AddNinja/>
        <Ninjas ninjas={this.state.ninjas} />
        
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