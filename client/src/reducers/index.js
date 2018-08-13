import { combineReducers } from "redux";
import {
  UPDATE_USER,
  UPDATE_CARD,
  RESET_USER,
  UPDATE_BALANCE,
  UPDATE_AUTO_RELOAD,
  UPDATE_PASS,
  UPDATE_PROFILE
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
      case UPDATE_PROFILE:
        if (!action.user) {
          return state;
        } else {
          var newData = Object.assign({}, state, {
            id: action.user.user.id,
            first: action.user.user.first,
            last: action.user.user.last,
            username: action.user.user.username,
            email: action.user.user.email,
            phone: action.user.user.phone,
            dob: action.user.user.dob,
            street: action.user.user.street,
            city: action.user.user.city,
            state: action.user.user.state,
            zip: action.user.user.zip
          });
          return newData;
        }
    default:
      return state;
  }
};

const cardReducer = (state = initialState.card, action) => {
  switch (action.type) {
    case UPDATE_CARD:
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
    case UPDATE_BALANCE:
      if (!action.balance) {
        return state;
      } else {
        var newBalance = Object.assign({}, state, {
          balance: action.balance
        });
        return newBalance;
      }
    case UPDATE_AUTO_RELOAD:
      var newReload = Object.assign({}, state, {
        auto_reload: action.reload
      });
      return newReload;
    case UPDATE_PASS:
      if (!action.pass) {
        return state;
      } else {
        var newPass = Object.assign({}, state, {
          pass: action.pass
        });
        return newPass;
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
