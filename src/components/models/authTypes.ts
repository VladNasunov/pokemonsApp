export enum AuthActinEnum {
  SET_AUTH = "SET_AUTH",
}
export interface SetAuthAction {
  type: AuthActinEnum.SET_AUTH;
  payload: boolean;
}
export type AuthAction = SetAuthAction;
export type AuthState = {
  auth: boolean;
};
