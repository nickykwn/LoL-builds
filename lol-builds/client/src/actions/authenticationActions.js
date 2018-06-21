import axios 							from 'axios';
import { client, url , setToken }		from '../utils/axiosconfig.js';

export const SIGN_UP 					= SIGN_UP;
export const LOG_IN						= LOG_IN;
export const LOG_OUT					= LOG_OUT;

export function signUp(data) {

	const resObj = {
		email: 			data.email,
		password: 		data.password 
	};
	return axios.post(url + '', resObj)
	.then ( res => {

		return {
			type: 			SIGN_UP,
			payload: 		res
		}
	})
}

export function logIn(data) {

	const resObj = {
		email: 			data.email,
		password: 		data.password
	};

	return axios.post(url + '', resObj)
	.then ( res => {
		localStorage.setItem('id', res.data.id);
		localStorage.setItem('token', res.data.token);

		setToken();
		return {

			type: 		LOG_IN,
			payload: 	res
		}
	})
}

export function logOut(data) {

	localStorage.removeItem('id');
	localStorage.removeItem('token');

	return {
		type: LOG_OUT
	}
}