import { styled } from "@mui/material";
import React from "react";
import ScreenShareButton from "./ScreenShareButton";
import MicButton from "./MicButton";
import CloseRoomButton from "./CloseRoomButton";
import CameraButton from "./CameraButton";
import { useSelector } from "react-redux";

const MainContainer = styled("div")({
  height: "15%",
  width: "100%",
  backgroundColor: "#5865f2",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

function RoomButtons(props) {
  const { localStream, isUserJoinedwithOnlyAudio } = useSelector(
    (state) => state.room
  );
  return (
    <MainContainer>
      {!isUserJoinedwithOnlyAudio && <ScreenShareButton />}
      <MicButton localStream={localStream} />
      <CloseRoomButton />
      {!isUserJoinedwithOnlyAudio && <CameraButton localStream={localStream} />}
    </MainContainer>
  );
}

export default RoomButtons;
