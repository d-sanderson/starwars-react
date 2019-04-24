import React, { Component } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      starWarsFilms: [],
      starWarsPeople: [],
      starWarsSpecies: [],
      starWarsVehicles: [],
      starWarsStarships: [],
      starWarsPlanets: [],
    };
    this.url = 'https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3';
    this.audio = new Audio(this.url);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  componentDidMount() {
    Promise.all([
      fetch('https://swapi.co/api/films/'),
      fetch('https://swapi.co/api/people/'),
      fetch('https://swapi.co/api/species/'),
      fetch('https://swapi.co/api/vehicles/'),
      fetch('https://swapi.co/api/starships/'),
      fetch('https://swapi.co/api/planets/'),
    ])
      .then(([res1, res2, res3, res4, res5, res6]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json(), res6.json()]))
      .then(([data1, data2, data3, data4, data5, data6, data7]) => this.setState({
        starWarsFilms: data1,
        starWarsPeople: data2,
        starWarsSpecies: data3,
        starWarsVehicles: data4,
        starWarsStarships: data5,
        starWarsPlanets: data6,
      }));
  }

  play() {
    this.setState({
      play: true,
      pause: false,
    });
    console.log(this.audio);
    this.audio.play();
  }

  pause() {
    this.setState({ play: false, pause: true });
    this.audio.pause();
  }

  render() {
    const {starWarsFilms, starWarsPeople, starWarsPlanets, starWarsSpecies, starWarsStarships, starWarsVehicles } = this.state;
    return (
      <div className="container">
        <nav style={{ display: 'flex' }}>
          <ul>
            <li>
              <NavLink to="/home" className="normal" activeClassName="active" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/characters" className="normal" activeClassName="active" exact>
                Characters
              </NavLink>
            </li>
            <li>
              <NavLink to="/planets" className="normal" activeClassName="active" exact>
                Planets
              </NavLink>
            </li>
            <li>
              <NavLink to="/films" className="normal" activeClassName="active" exact>
                Films
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="col-sm-12">
          <h1 className="header text-left">A long time ago in a galaxy far, far away....</h1>
          <p>{JSON.stringify(starWarsFilms)}</p>
          <p style={{color: 'red'}}>{JSON.stringify(starWarsPeople)}</p>
          <p style={{color: 'blue'}}>{JSON.stringify(starWarsPlanets)}</p>
          <p style={{color: 'pink'}}>{JSON.stringify(starWarsVehicles)}</p>
          <p style={{color: 'yellow'}}>{JSON.stringify(starWarsStarships)}</p>
          <p style={{color: 'lime'}}>{JSON.stringify(starWarsSpecies)}</p>
        </div>
      </div>
    );
  }
}

export default Home;
