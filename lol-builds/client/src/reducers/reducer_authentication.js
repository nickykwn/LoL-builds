var DEFAULT_STATE = {
	login: 			{},
	signup: 		"",
	logout: 		"",
}

const login 	= ( state, action ) => {

	let newState 		= {};
	let login			= action.payload;

	Object.assign(newState, state, {login});
	return newState;
}

const signup 	= ( state, action ) => {

	let newState 		= {};
	let signup			= action.payload;

	Object.assign(newState, state, {signup});
	return newState;
}

const logout 	= ( state, action ) => {

	let newState		= {};
	let signup			= action.payload;

	Object.assign(newState, state, {logout});
	return newState;
}


export default function(state = [], action) {
	switch(action.type) {
		case 'SIGN_UP':
			return signup(state, action);
		case 'LOG_IN':
			return login(state, action);
		case 'LOG_OUT':
			return logout(state, action);
		default:
			return state;
	}
}