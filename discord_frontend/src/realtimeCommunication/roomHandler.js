import {
  setActiveRooms,
  setIsUserJoinedwithOnlyAudio,
  setLocalStream,
  setOpenRoom,
  setRemoteStreams,
  setRoomDetails,
  setScreenSharingStream,
} from "../features/roomSlice";
import store from "../store";
import * as socketConnection from "./socketConnection";
import * as webRTCHandler from "./webRTCHandler";

export const createNewRoom = () => {
  const successCallbackFunc = () => {
    store.dispatch(
      setOpenRoom({ isUserInRoom: true, isUserRoomCreator: true })
    );
    socketConnection.createNewRoom();
  };

  const audioOnly = store.getState().room.audioOnly;
  store.dispatch(setIsUserJoinedwithOnlyAudio(audioOnly));
  webRTCHandler.getLocalStreamPreview(audioOnly, successCallbackFunc);
};

export const newRoomCreated = (data) => {
  const { roomDetails } = data;
  store.dispatch(setRoomDetails(roomDetails));
};

export const updateActiveRooms = (data) => {
  const { activeRooms } = data;
  const friends = store.getState().friends.friends;

  const rooms = [];

  const userId = store.getState().auth.userDetails?._id;

  activeRooms.forEach((room) => {
    const isRoomCreatedByMe = room.roomCreator.userId === userId;

    if (isRoomCreatedByMe) {
      rooms.push({ ...room, creatorUserName: "Me" });
    }

    friends.forEach((friend) => {
      if (friend.id === room.roomCreator.userId) {
        rooms.push({ ...room, creatorUserName: friend.username });
      }
    });
  });

  store.dispatch(setActiveRooms(rooms));
};

export const joinRoom = (roomId) => {
  const audioOnly = store.getState().room.audioOnly;
  const successCallbackFunc = () => {
    store.dispatch(setRoomDetails({ roomId }));
    store.dispatch(
      setOpenRoom({ isUserInRoom: true, isUserRoomCreator: false })
    );
    store.dispatch(setIsUserJoinedwithOnlyAudio(audioOnly));
    socketConnection.joinRoom({ roomId });
  };

  webRTCHandler.getLocalStreamPreview(audioOnly, successCallbackFunc);
};

export const leaveRoom = () => {
  const roomId = store.getState().room.roomDetails.roomId;

  const localStream = store.getState().room.localStream;
  if (localStream) {
    localStream.getTracks().forEach((track) => track.stop());
    store.dispatch(setLocalStream(null));
  }

  const screenSharingStream = store.getState().room.screenSharingStream;
  if (screenSharingStream) {
    screenSharingStream.getTracks().forEach((track) => track.stop());
    store.dispatch(
      setScreenSharingStream({
        screenSharingStream: null,
        isScreenSharingActive: false,
      })
    );
  }

  store.dispatch(setRemoteStreams([]));
  webRTCHandler.closeAllConnections();

  socketConnection.leaveRoom({ roomId });
  store.dispatch(setRoomDetails(null));
  store.dispatch(
    setOpenRoom({ isUserInRoom: false, isUserRoomCreator: false })
  );
};
