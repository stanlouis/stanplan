import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGN_OUT_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR
} from '../actions/authActions';

const initState = { authError: null };

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      console.log('login error');
      return { ...state, authError: 'Login failed' };
    case LOGIN_SUCCESS:
      console.log('login success');
      return { ...state, authError: null };
    case SIGN_OUT_SUCCESS:
      console.log('logout success');
      return state;
    case SIGN_UP_SUCCESS:
      console.log('signup success');
      return {
        ...state,
        authError: null
      };
    case SIGN_UP_ERROR:
      console.log('signup error');
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
