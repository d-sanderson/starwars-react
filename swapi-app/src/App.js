import React, { Component } from 'react';
import './App.css';
import Characters from "./characters/characters";

class App extends Component {
   constructor(){
      super();
      this.state = { starWarsPeople: {}

      }
   }


  render() {
    return (
      <div>
         <h1>Star Wars</h1>
         <Characters/>

      </div>
    );
  }
}

export default App;
