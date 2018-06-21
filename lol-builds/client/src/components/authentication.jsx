import React, { Component } 			from 'react';
import LogIn						 	from '../microcomponents/authentication/login.jsx';
import SignUp 						  	from '../microcomponents/authentication/signup.jsx';

class Authentication extends Component {
	
	constructor(props){
		super(props) 
		
		this.login 				= this.login.bind(this);
		this.signup 			= this.signup.bind(this);
	}

	signup() {
		return (
			<SignUp />
		)
	}

	login() {
		return (
			<LogIn />
		)
	}

	authenticationRender() {
		let { pathname } = this.props.location;

		switch (pathname) {
			case "/signup":
				return this.signup();
			case "/login":
				return this.login();
			default:
				return
		}
	}

	render () {
		return(
			<div>
				{ this.authenticationRender() }
			</div>
		)
	}
}

export default Authentication