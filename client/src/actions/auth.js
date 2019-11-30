import { LOGIN_MAIL_CHANGED, LOGIN_PASSWORD_CHANGED } from './types';

export const loginMailChanged = mail => dispatch => {
  dispatch({
    type: LOGIN_MAIL_CHANGED,
    payload: mail
  });
};

export const loginPasswordChanged = password => dispatch => {
  dispatch({
    type: LOGIN_PASSWORD_CHANGED,
    payload: password
  });
};
