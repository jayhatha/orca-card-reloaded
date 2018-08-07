import {combineReducers} from 'redux';
import { UPDATE_USER } from '../constants/action_types';

const initialState = {
	token: '', 
	first: '',
	last: '',
	username: '',
	email: '',
	phone: '',
	dob: '',
	street: '',
	city: '',
	state: '',
	zip: '',
	question: '',
	answer: '',
	password: ''
};

const userReducer = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_USER:
			console.log('received the test action, here is the user: ' + action.userData)
			if (!action.userData) {
				return state
			} else {
				var objAss = Object.assign({}, state, {
					token: action.userData.token, 
					first: action.userData.user.first,
					last: action.userData.user.last,
					username: action.userData.user.username,
					email: action.userData.user.email,
					phone: action.userData.user.phone,
					dob: action.userData.user.dob,
					street: action.userData.user.street,
					city: action.userData.user.city,
					state: action.userData.user.state,
					zip: action.userData.user.zip,
					question: action.userData.user.question,
					answer: action.userData.user.answer,
					password: action.userData.user.password
				})
				return objAss
			}
		default:
			return state
	}
}

const rootReducer = combineReducers({
  userReducer,
})

export default rootReducer
