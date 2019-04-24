import React, { Component } from 'react';
import './App.css';
import Title from './Title/Title';
import Characters from './Characters/Characters';
import Planets from './Planets/Planets';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starWarsFilms: [{}],
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          starWarsFilms: data.results,
        });
        const { starWarsFilms } = this.state;
        console.log(starWarsFilms);
      });
  }

  render() {
    return (
      <div>
        <Title />
        <Characters />
        <Planets />
      </div>
    );
  }
}

export default App;
