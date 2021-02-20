import { LOGIN, LOGOUT } from './contants';

export const initialAuthState = { user: undefined, token: undefined };

export function authReducer(state, action) {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload.user, token: action.payload.token };
    case LOGOUT:
      return initialAuthState;
    default:
      throw new Error();
  }
}
