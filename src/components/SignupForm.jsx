import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import './SignupForm.css'

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault()
		// TODO - validate!
		axios
			.post('/auth/signup', {
				username: this.state.username,
				password: this.state.password
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('youre good')
					this.setState({
						redirectTo: '/login'
					})
				} else {
					console.log('duplicate')
				}
			})
	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
		<div class="signUp">
			<form className="SignupForm" action="#" method="post">
				<h2>Sign Up</h2>
				<label htmlFor="username" class="floatLabel">Username: </label>
				<input
					id="user"
					type="text"
					name="username"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<label htmlFor="password" class="floatLabel">Password: </label>
				<input
					id="password"
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
				/>
				<label htmlFor="confirmPassword" class="floatLabel">Confirm Password: </label>
				<input
					id="confirmPassword"
					type="password"
					name="confirmPassword"
					value={this.state.confirmPassword}
					onChange={this.handleChange}
				/>
				<button type="submit" value="Sign Up" id="submit" onClick={this.handleSubmit}>Sign up</button>
			</form>
		</div>
		)
	}
}

export default SignupForm
