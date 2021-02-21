import { LOGIN, LOGOUT } from './contants';

export const initialAuthState = { token: undefined };

export function authReducer(state, action) {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('token', action.payload.token);
      return { token: action.payload.token };
    case LOGOUT:
      localStorage.removeItem('token');
      return initialAuthState;
    default:
      throw new Error();
  }
}
