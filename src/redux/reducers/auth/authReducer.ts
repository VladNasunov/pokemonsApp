import { AuthActionEnum, AuthAction, AuthState } from "../../types/authTypes";

export const initialState: AuthState = {
  auth: false,
  user_name: "",
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionEnum.SET_AUTH:
      return { ...state, auth: action.payload };
    case AuthActionEnum.SET_NAME:
      return { ...state, user_name: action.payload };
    default:
      return state;
  }
};
export default authReducer;
