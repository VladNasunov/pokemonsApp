import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../redux/types/authTypes";

export const initialState: AuthState = {
  auth: false,
  user_name: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.auth = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.user_name = action.payload;
    },
  },
});

export default authSlice.reducer;
