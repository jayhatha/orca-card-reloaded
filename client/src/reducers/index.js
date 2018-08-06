import {combineReducers} from 'redux';
import { } from '../actions/index';

const reducerOne = (state = initialState, action) => {
	switch(action.type) {
		case ACTION_TEST:
			console.log("received the test action")
			var newVar = Array.from(state.testVar)
		  newVar.push(action.payload)
			return Object.assign({}, state, {testVar: newVar})
		default:
			return state
	}
}

const rootReducer = combineReducers({
  reducerOne,
})

export default rootReducer
