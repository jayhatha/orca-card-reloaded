import {combineReducers} from 'redux';
import { UPDATE_USER } from '../constants/action_types';

const initialState = {token: '', user: null};

const userReducer = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_USER:
			console.log('received the test action, here is the user: ' + action.token, action.user)
			var objAss = Object.assign({}, state, {token: action.token, user: action.user})
			console.log(objAss)
			return Object.assign({}, state, {token: action.token, user: action.user})
		default:
			return state
	}
}

const rootReducer = combineReducers({
  userReducer,
})

export default rootReducer
