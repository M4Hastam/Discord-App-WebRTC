import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    showAlertMessage: false,
    alertMessageContent: null,
  },
  reducers: {
    openAlertMessage: (state, action) => {
      state.showAlertMessage = true;
      state.alertMessageContent = action.payload;
    },
    closeAlertMessage: (state) => {
      state.showAlertMessage = false;
      state.alertMessageContent = null;
    },
  },
});

export default alertSlice.reducer;
export const { openAlertMessage, closeAlertMessage } = alertSlice.actions;
