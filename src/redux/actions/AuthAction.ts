import { AppDispatch } from "..";
import {
  AuthActionEnum,
  SetAuthAction,
  SetNameAction,
} from "../types/authTypes";

export const AuthAction = {
  setUserName:
    (name: string) =>
    (dispatch: AppDispatch): SetNameAction => {
      localStorage.setItem("name", name);
      return dispatch({
        type: AuthActionEnum.SET_NAME,
        payload: name,
      });
    },
  login: (): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: true,
  }),
  logout:
    () =>
    (dispatch: AppDispatch): SetAuthAction => {
      localStorage.clear();
      return dispatch({
        type: AuthActionEnum.SET_AUTH,
        payload: false,
      });
    },
};
