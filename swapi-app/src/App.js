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
      <div className="container">

			<div className="row">
				<div className="col s1 offset-s1">1</div>
				<div className="col s1">2</div>
				<div className="col s1">3</div>
				<div className="col s1">4</div>
				<div className="col s1">5</div>
				<div className="col s1">6</div>
				<div className="col s1">7</div>
				<div className="col s1">8</div>
				<div className="col s1">9</div>
				<div className="col s1">10</div>

			</div>
         <div className="row">
            <div className="col s4 offset-s4">
         <h1 className="text-center">Star Wars</h1>
         </div>

         </div>

         <Characters/>

      </div>
    );
  }
}

export default App;
