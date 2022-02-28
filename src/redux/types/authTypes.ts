export enum AuthActionEnum {
  SET_AUTH = "SET_AUTH",
  SET_NAME = "SET_NAME",
}
export interface SetAuthAction {
  type: AuthActionEnum.SET_AUTH;
  payload: boolean;
}
export interface SetNameAction {
  type: AuthActionEnum.SET_NAME;
  payload: string;
}

export type AuthState = {
  auth: boolean;
  user_name: string;
};

export type AuthAction = SetAuthAction | SetNameAction;
