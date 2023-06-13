import {
  FETCH_MAILS_SUCCESS,
  FETCH_MAILS_FAILURE,
  SELECT_MAIL,
  FILTER_MAIL,
  FETCH_MAILS,
  SEARCH_MAIL,
} from "./constants";

export const fetchMails = () => ({
  type: FETCH_MAILS,
});

export const setFilter = (filter) => ({
  type: FILTER_MAIL,
  payload: filter,
});

export const setFilterSuccess = (mails) => {
  return {
    type: FETCH_MAILS_SUCCESS,
    payload: mails,
  };
};

export const selectMail = (mailId) => {
  return {
    type: SELECT_MAIL,
    payload: mailId,
  };
};

export const fetchMailsSuccess = (mails) => {
  return {
    type: FETCH_MAILS_SUCCESS,
    payload: mails,
  };
};

export const fetchMailsFailure = (error) => {
  return {
    type: FETCH_MAILS_FAILURE,
    payload: error,
  };
};

export const setSearchMail = (searchTerm) => {
  return {
    type: SEARCH_MAIL,
    payload: searchTerm,
  };
};

export const searchMailSuccess = (mails) => {
  return {
    type: FETCH_MAILS_SUCCESS,
    payload: mails,
  };
};
