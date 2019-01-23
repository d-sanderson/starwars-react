import React, { Component } from 'react'
import './Landing.css'
import { Redirect } from 'react-router-dom'

class Landing extends Component {
	state = {
			redirect: false
		}

	goToSite	= () => {
		this.setState({
			redirect: true
		})
	}

	renderRedirect = () => {
		if (this.state.redirect) {
			return <Redirect to='/nav' />
		}
	}

	render(){
	return(
		<div className="container">
			<div className="col-sm-12">
				<img className="logo img-responsive" src="https://pbs.twimg.com/media/DHoGVd5V0AAMuBm.jpg"/>
				<div className="mb-3">
					{this.renderRedirect()}
				<button onClick={this.goToSite} type="button" className="btn btn-warning btn-lg offset-5">Enter Site</button>
				</div>
			</div>

		</div>

	)
	}
}
export default Landing