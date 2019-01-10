import React, { Component } from 'react';
import styles from './OpeningCrawl.css'

class OpeningCrawl extends Component {
	constructor(){
		super();
		this.state = { starWarsFilms: [{}]

		}
	}



	componentDidMount() {
		fetch("https://swapi.co/api/films/")
			.then(response => response.json())
			.then(data => {

				this.setState({
					starWarsFilms: data.results

				});
				console.log(this.state.starWarsFilms);

			})

	}




	render() {
		return (
			<div>
				<h2>Intro</h2>
				{this.state.starWarsFilms.map(({opening_crawl})=>
				<div className="fade">

				<section className="star-wars">
					<div className="crawl">
						<div className="title">
							<p>Episode IV</p>
							<h1>A New Hope</h1>
						</div>

						<p>{opening_crawl}</p>
					</div>
				</section>
			</div>


					)}


			</div>
		);
	}
}

export default OpeningCrawl;
