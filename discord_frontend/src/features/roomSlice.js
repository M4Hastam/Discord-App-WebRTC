import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
  name: "room",
  initialState: {
    isUserInRoom: false,
    isUserRoomCreator: false,
    roomDetails: null,
    activeRooms: [],
    localStream: null,
    remoteStreams: [],
    audioOnly: false,
    screenSharingStream: null,
    isScreenSharingActive: false,
    isUserJoinedwithOnlyAudio: false,
  },
  reducers: {
    setOpenRoom: (state, action) => {
      state.isUserInRoom = action.payload.isUserInRoom;
      state.isUserRoomCreator = action.payload.isUserRoomCreator;
    },

    setRoomDetails: (state, action) => {
      state.roomDetails = action.payload;
    },

    setActiveRooms: (state, action) => {
      state.activeRooms = action.payload;
    },

    setLocalStream: (state, action) => {
      state.localStream = action.payload;
    },

    setRemoteStreams: (state, action) => {
      state.remoteStreams = action.payload;
    },

    setAudioOnly: (state, action) => {
      state.audioOnly = action.payload;
    },

    setScreenSharingStream: (state, action) => {
      state.screenSharingStream = action.payload.screenSharingStream
        ? action.payload.screenSharingStream
        : null;

      state.isScreenSharingActive = action.payload.isScreenSharingActive
        ? action.payload.isScreenSharingActive
        : false;
    },

    setIsUserJoinedwithOnlyAudio: (state, action) => {
      state.isUserJoinedwithOnlyAudio = action.payload;
    },
  },
});

export default roomSlice.reducer;
export const {
  setOpenRoom,
  setRoomDetails,
  setActiveRooms,
  setLocalStream,
  setRemoteStreams,
  setAudioOnly,
  setScreenSharingStream,
  setIsUserJoinedwithOnlyAudio,
} = roomSlice.actions;
