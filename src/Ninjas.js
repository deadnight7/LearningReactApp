import React, { Component } from 'react';

class Ninjas extends Component {
  
  render() {
    console.log(this.props);
    
    //Destruturing props
    const {ninjas} = this.props;
    const ninjaList = ninjas.map(ninja => {
      return (
        <div key={ninja.id}>
          <hr/>
          <p>Ninja</p>
          <div>Name : {ninja.name}</div>
          <div>Age : {ninja.age}</div>
          <div>Belt : {ninja.belt}</div>
        </div>
      );
    });
    return (
      <div className="NinjaList">
        { ninjaList }
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