import React, { Component } from 'react';
import './characters.css';

class Characters extends Component {
	constructor(){
		super();
		this.state = { starWarsPeople: [{}],
		luke: {}

		}
	}



	componentDidMount() {
		fetch("https://swapi.co/api/people/")
			.then(response => response.json())
			.then(data => {

				this.setState({
					starWarsPeople: data.results,
					luke : data["results"][0],

				});
				console.log(this.state.starWarsPeople);

			})

	}




	render() {
		return (
			<div>
			<ul>
				{this.state.starWarsPeople.map(({name, gender, height, homeworld, birth_year, url})=>
					<div>

						<h1><a href={url}>{name}</a></h1>
						<br/>
						<li>Home World: {homeworld}</li>
						<li>Species: {gender}</li>
						<li>DOB: {birth_year}</li>
						<li>Sex: {gender}</li>
						<li>Height: {height}</li>
<br/>
					</div>


)}
</ul>

			</div>
		);
	}
}

export default Characters;
