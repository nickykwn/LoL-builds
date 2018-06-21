import React, { Component, PropTypes }	 from 'react';
import { connect } 						 from 'react-redux';
import { bindActionCreators }			 from 'redux';
import { Redirect }						 from 'react-router';
import { Button, 
		 Form,
		 Col, 
		 Column, 
		 Row,
		 FormGroup,
		 ControlLabel}					 from 'react-bootstrap';
import { logIn }						 from '../../actions/authenticationActions.js';


class LogInPage extends Component{
	
	constructor(props) {
		super(props);

		this.state = {
			password: 			"",
			email: 	  			"",
		}

		this.handleChange 						= this.handleChange.bind(this);
		this.submit 							= this.submit.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value 
		})
	}


	submit(e) {
		e.preventDefault();
		const { logIn } = this.props;

		const data 		=  {};
		data.email 		= this.state.email;
		data.password	= this.state.password;

		logIn(data)
	}

	render () {
		return (
			<div className = "content" >
				<h2>LogIn</h2>
				<Form onsubmit={this.submit} className="auth-form"> 
					<Row>
						<Col xs={ 6 }>
							<FormGroup controlId="horizontalPassword">
							<ControlLabel className="auth-labels">Email</ControlLabel>
							<input
								className="form-control"
								type="email"
								placeholder="email"
								name="email"
								value={this.state.email}
								onChange={this.handleChange}
							/>
							</FormGroup>
						</Col>
						<Col xs={ 6 }>
							<FormGroup controlId="horizontalPassword">
							<ControlLabel className="auth-labels">Password</ControlLabel>
							<input
								className="form-control"
								type="password"
								placeholder="password"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
							</FormGroup>
						</Col>
						<Button type="submit" bsStyle ="success">Login</Button>
					</Row>
				</Form>
			</div>	
		)
	}
}

function mapStateToProps(state) {
    return {
        authentication: state.authentication
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ logIn }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);