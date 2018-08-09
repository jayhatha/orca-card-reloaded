import { combineReducers } from "redux";
import {
  UPDATE_USER,
  UPDATE_CARD,
  RESET_USER
} from "../constants/action_types";

const initialState = {
  user: {
    token: "",
    id: null,
    first: "",
    last: "",
    username: "",
    email: "",
    phone: "",
    dob: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    question: "",
    answer: "",
    password: ""
  },
  card: {
    id: "",
    userId: "",
    balance: "",
    pass: "",
    auto_reload: "",
    cvv: "",
    nickname: "",
    passenger_type: "",
    isactive: ""
  }
};

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
		case RESET_USER:
		console.log('called the resetUser reducer')
		var blank = Object.assign({}, state, {
			token: "",
	    id: null,
	    first: "",
	    last: "",
	    username: "",
	    email: "",
	    phone: "",
	    dob: "",
	    street: "",
	    city: "",
	    state: "",
	    zip: "",
	    question: "",
	    answer: "",
	    password: ""
		});
		return blank;
    case UPDATE_USER:
      if (!action.userData) {
        return state;
      } else {
        var newObj = Object.assign({}, state, {
          token: action.userData.token,
          id: action.userData.user.id,
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
        });
        return newObj;
      }
    default:
      return state;
  }
};

const cardReducer = (state = initialState.card, action) => {
  switch (action.type) {
    case UPDATE_CARD:
      console.log("received the test action, here is the card: ", action.card);
      if (!action.card) {
        return state;
      } else {
        var newCard = Object.assign({}, state, {
          id: action.card.card.id,
          userId: action.card.card.userId,
          balance: action.card.card.balance,
          pass: action.card.card.pass,
          auto_reload: action.card.card.auto_reload,
          cvv: action.card.card.cvv,
          nickname: action.card.card.nickname,
          passenger_type: action.card.card.passenger_type,
          isactive: action.card.card.isactive
        });
        return newCard;
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  card: cardReducer
});

export default rootReducer;
