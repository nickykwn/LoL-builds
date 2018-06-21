import React, { Component, propTypes }			from 'react';
import { connect } 								from 'react-redux';
import { bindActionCreators }					from 'redux';
import { Redirect }								from 'react-router';
import { Button,
		 Row,
		 Col, 
		 Form, 
		 FormGroup, 
		 ControlLabel }							from 'react-bootstrap';
import 	{ signUp }								from '../../actions/authenticationActions.js';

class SignUpPage extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			email: 		"",
			password: 	"",
		}

		this.handleChange 						= this.handleChange.bind(this);
		this.submit								= this.submit.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: 					e.target.value
		})
	}

	submit(e) {
		e.preventDefault();

		const data 								= {};
		data.email								= this.state.email;
		data.password							= this.state.password;

		const { signUp }						= this.props;
		signUp(data)
	}

	render () {
		return (
			<div className="content">
				<h2>SignUp</h2>
				<form onSubmit={this.submit} className="auth-form">
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
							<FormGroup controlId="formHorizontalPassword">
								<ControlLabel className="enterprise-labels">Password</ControlLabel>
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
					</Row>
					<Button type="submit" bsStyle="success">Signup</Button> 
				</form>
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
	return bindActionCreators({signUp}, dispatch);
}

export default connect(mapDispatchToProps, mapDispatchToProps)(SignUpPage);