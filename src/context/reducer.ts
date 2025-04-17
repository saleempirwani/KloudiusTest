import {AUTH_LOADING, SIGN_OUT, USER_SESSION} from './types';

export interface AuthState {
  loading: boolean;
  userData: any;
}

export type AuthAction =
  | {type: typeof AUTH_LOADING; payload: boolean}
  | {type: typeof USER_SESSION; payload: any}
  | {type: typeof SIGN_OUT};

export const INIT_STATE: AuthState = {
  loading: false,
  userData: null,
};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case USER_SESSION:
      return {
        ...state,
        userData: action.payload,
      };

    case SIGN_OUT:
      return {
        ...INIT_STATE,
      };

    default:
      return state;
  }
};
