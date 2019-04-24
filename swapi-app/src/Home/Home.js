import React, { Component } from 'react';
import './Home.css';
import BrowserRouter, { NavLink } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      starWarsFilms: [{}],
    };
    this.url = 'https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3';
    this.audio = new Audio(this.url);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
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
        </div>
      </div>
    );
  }
}

export default Home;
