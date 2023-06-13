import { combineReducers } from "redux";
import {
  FETCH_MAILS_SUCCESS,
  SELECT_MAIL,
  FILTER_MAIL,
  SEARCH_MAIL,
} from "./constants";

const mailsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MAILS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const selectedMailReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_MAIL:
      return action.payload;
    default:
      return state;
  }
};

const filterMailsReducer = (state = null, action) => {
  switch (action.type) {
    case FILTER_MAIL:
      return action.payload;
    default:
      return state;
  }
};

const searchedMailReducer = (state = null, action) => {
  switch (action.type) {
    case SEARCH_MAIL:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  mails: mailsReducer,
  selectedMail: selectedMailReducer,
  filterMails: filterMailsReducer,
  searchedMails: searchedMailReducer,
});

export default rootReducer;
