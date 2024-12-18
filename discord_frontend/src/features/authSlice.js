import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api";
import { openAlertMessage } from "./alertSlice";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userDetails: null,
  },
  reducers: {
    SetUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export const login = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.login(userDetails);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch({ type: "auth/SetUserDetails", payload: userDetails });
      navigate("/dashboard");
    }
  };
};

export const register = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.register(userDetails);

    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch({ type: "auth/SetUserDetails", payload: userDetails });
      navigate("/dashboard");
    }
  };
};

export const { SetUserDetails } = authSlice.actions;
export default authSlice.reducer;
