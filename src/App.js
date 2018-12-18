import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    name : "React",
    age : 27
  }
   
  setName = (e) => {
    this.setState ({
      name : e.target.value
    });
  }
  formSubmit = (e) =>{
    //Submit form
    e.preventDefault();
    console.log("Form Submitted : "+this.state.name);
  }
  render() {
    return (
      <div>
        My name is {this.state.name}..!
        <form onSubmit={this.formSubmit}>
          <input type="text" onChange={this.setName}/>
          <input type="submit" />
        </form>
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