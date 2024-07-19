import { createSlice } from "@reduxjs/toolkit";
import { register, login } from "./authOperation";

const initialState = {
  name: null,
  email: null,
  isRefreshing: false,
  isLoggedIn: false,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => state)
      .addCase(register.rejected, (state) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.name = action.payload.dataUser.name;
        state.email = action.payload.dataUser.email;
        state.token = action.payload.dataUser.token;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(login.pending, (state) => state)
      .addCase(login.rejected, (state) => state)
      .addCase(login.fulfilled, (state, action) => {
        state.name = action.payload.dataUser.name;
        state.email = action.payload.dataUser.email;
        state.token = action.payload.dataUser.token;
      }),
});
