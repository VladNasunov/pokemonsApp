import {
  AuthActinEnum,
  AuthAction,
  AuthState,
} from "../../../components/models/authTypes";

export const initialState: AuthState = {
  auth: false,
};

export default function authReducer(
  state = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case AuthActinEnum.SET_AUTH:
      return { ...state, auth: action.payload };
    default:
      return state;
  }
}
