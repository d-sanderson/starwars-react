import React, { Component } from 'react';
import './App.css';

class App extends Component {
   constructor(){
      super();
      this.state = { starWarsPeople: {}

      }
   }

   componentDidMount() {
      fetch("https://swapi.co/api/people/")
         .then(response => response.json())
         .then(data => {

            this.setState({ starWarsPeople: data});
				console.log(this.state.starWarsPeople["results"][0]["name"]);
         })

   }


  render() {
    return (
      <div>
         <h1>Star Wars</h1>

      </div>
    );
  }
}

export default App;
