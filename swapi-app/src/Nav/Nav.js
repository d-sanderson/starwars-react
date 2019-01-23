import React, {Component} from 'react'
import './Nav.css'
import OpeningCrawl from '../OpeningCrawl/OpeningCrawl'


class Nav extends Component {

	constructor(props) {
		super(props);
		this.state = {
			play: false,
			starWarsFilms: [{}]

		};
		this.url = "https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3";
		this.audio = new Audio(this.url);
		this.play = this.play.bind(this);
		this.pause = this.pause.bind(this);
	}

	play(){
		this.setState({
			play: true,
			pause: false
		});
		console.log(this.audio);
		this.audio.play();
	}

	pause(){
		this.setState({ play: false, pause: true });
		this.audio.pause();
	}

	render() {
		return (
			<div className="container">
				<div className="col-sm-12">
				<h1 className="header text-left">A long time ago in a galaxy far, far away....</h1>
					<div className="mt-5 pt-5 offset-4">
						<button className="btn-dark text-primary btn-lg" onClick={this.play}>Play</button>
						<button className="btn-dark text-primary btn-lg mt-3" onClick={this.pause}>Pause</button>
					</div>
					<OpeningCrawl/>
				</div>
			</div>)

	}
}

export default Nav