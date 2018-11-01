let token = '';//localStorage.getItem('token');
const initialState = token ? {loggedIn: true, token} : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        loggingIn: true,
        token: action.token,
        loginmessage: action.message
      };
    case 'LOGIN_FAILURE':
      return {
        loggingIn: false,
        token: null,
        loginmessage: action.message
      };
    case 'LOGOUT_FAILURE':
      return {
        message: action.message
      };
    case 'LOGOUT_SUCCESS':
      return {
        message: action.message
      };
    case 'SIGNUP_SUCCESS':
      return {
        signupmessage: action.message,
        data: action.data
      }
    case 'SIGNUP_FAILURE':
      return {
        signupmessage: action.message,
        data: action.data
      }

    default:
      return state
  }
}