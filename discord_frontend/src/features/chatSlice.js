import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chosenChatDetails: null,
    chatType: null,
    messages: [],
  },
  reducers: {
    setChosenChatDetails: (state, action) => {
      state.chosenChatDetails = action.payload.chatDetails;
      state.chatType = action.payload.chatType;
      state.messages = [];
    },

    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export default chatSlice.reducer;
export const { setChosenChatDetails, setMessages } = chatSlice.actions;
