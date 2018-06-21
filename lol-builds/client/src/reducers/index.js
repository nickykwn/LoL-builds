import { combineReducers }                      from 'redux';
import { reducer as Form }                      from 'redux-form';

import Authentication							from './reducer_authentication';

const rootReducer = combineReducers({
	authentication: 		Authentication
});

export default rootReducer;