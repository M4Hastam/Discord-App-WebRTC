import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import alertSlice from "./features/alertSlice";
import friendsSlice from "./features/friendsSlice";
import chatSlice from "./features/chatSlice";
import roomSlice from "./features/roomSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    alert: alertSlice,
    friends: friendsSlice,
    chat: chatSlice,
    room: roomSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
