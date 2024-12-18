import { createSlice } from "@reduxjs/toolkit";
import { openAlertMessage } from "./alertSlice";
import * as api from "../api";

const friendsSlice = createSlice({
  name: "friends",
  initialState: {
    friends: [],
    pendingFriendsInvitations: [],
    onlineUsers: [],
  },
  reducers: {
    setFriends: (state, action) => {
      state.friends = action.payload;
    },
    setPendingFriendsInvitations: (state, action) => {
      state.pendingFriendsInvitations = action.payload;
    },
    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
  },
});

export const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = await api.sendFriendInvitation(data);

    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage("Invitation has been send !"));
      closeDialogHandler();
    }
  };
};

export const acceptFriendInvitation = (data) => {
  return async (dispatch) => {
    const response = await api.acceptFriendInvitation(data);

    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage("Invitation accepted"));
    }
  };
};

export const rejectFriendInvitation = (data) => {
  return async (dispatch) => {
    const response = await api.rejectFriendInvitation(data);

    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage("Invitation rejected"));
    }
  };
};

export default friendsSlice.reducer;
export const { setPendingFriendsInvitations, setFriends, setOnlineUsers } =
  friendsSlice.actions;
