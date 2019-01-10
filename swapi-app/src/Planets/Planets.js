import React, { Component } from 'react';
import './Planets.css';

class Planets extends Component {
	constructor(){
		super();
		this.state = { starWarsPlanets: [{}]

		}
	}



	componentDidMount() {
		fetch("https://swapi.co/api/planets/")
			.then(response => response.json())
			.then(data => {

				this.setState({
					starWarsPlanets: data.results

				});

			})

	}




	render() {
		return (
			<div>
				<h2>Planets</h2>
				<ul>
					{this.state.starWarsPlanets.map(({name, rotation_period, orbital_period, climate, gravity, population, surface_water, terrain, url})=>
						<div>

							<h1><a href={url}>{name}</a></h1>
							<br/>
							<li>Rotation Period: {rotation_period}</li>
							<li>Orbital Period: {orbital_period}</li>
							<li>Gravity: {gravity}</li>
							<li>Climate: {climate}</li>
							<li>Terrain: {terrain}</li>
							<li>Surface Water: {surface_water}</li>
							<li>Population: {population}</li>
							<br/>
						</div>


					)}
				</ul>

			</div>
		);
	}
}

export default Planets;
