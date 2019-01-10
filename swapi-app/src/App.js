import React, {Component} from 'react';
import './App.css';
import Title from "./Title/Title"
import OpeningCrawl from "./OpeningCrawl/OpeningCrawl"
import Characters from "./Characters/Characters";
import Planets from "./Planets/Planets";

class App extends Component {
	constructor() {
		super();
		this.state = {
			starWarsPeople: {}

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

					<br/>
					<Title/>

				<OpeningCrawl/>
					<Characters/>
					<Planets/>
				</div>
			</div>
		);
	}
}

export default App;
