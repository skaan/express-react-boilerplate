import { LOGIN_MAIL_CHANGED, LOGIN_PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = {
  mail: '',
  password: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_MAIL_CHANGED:
      return {
        ...state,
        mail: action.payload
      };
    case LOGIN_PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload
      };
    default:
      return state;
  }
};
