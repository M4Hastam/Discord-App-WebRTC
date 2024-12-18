import React, { useState } from "react";
import { IconButton } from "@mui/material";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";
import { useDispatch, useSelector } from "react-redux";
import { setScreenSharingStream } from "../../../features/roomSlice";
import * as webRTCHandler from "../../../realtimeCommunication/webRTCHandler";

const constraints = {
  audio: false,
  video: true,
};

function ScreenShareButton(props) {
  const dispatch = useDispatch();
  const { localStream, screenSharingStream, isScreenSharingActive } =
    useSelector((state) => state.room);

  const handleScreenSharingToggle = async () => {
    if (!isScreenSharingActive) {
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getDisplayMedia(constraints);
      } catch (err) {
        console.error(
          "error occured when trying to get an access to screen share stream"
        );
      }

      if (stream) {
        dispatch(
          setScreenSharingStream({
            screenSharingStream: stream,
            isScreenSharingActive: true,
          })
        );
        webRTCHandler.switchOutgoingTracks(stream);
      }
    } else {
      webRTCHandler.switchOutgoingTracks(localStream);
      screenSharingStream.getTracks().forEach((t) => t.stop());
      dispatch(
        setScreenSharingStream({
          screenSharingStream: null,
          isScreenSharingActive: false,
        })
      );
    }
  };

  return (
    <IconButton onClick={handleScreenSharingToggle} style={{ color: "white" }}>
      {isScreenSharingActive ? <StopScreenShareIcon /> : <ScreenShareIcon />}
    </IconButton>
  );
}

export default ScreenShareButton;
