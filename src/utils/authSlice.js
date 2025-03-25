import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Stores the logged-in user
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload; // Save user credentials
    },
    logIn: (state, action) => {
      state.user = action.payload; // Set user on login
    },
    logOut: (state) => {
      state.user = null; // Clear user data on logout
    },
  },
});

export const { signUp, logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
