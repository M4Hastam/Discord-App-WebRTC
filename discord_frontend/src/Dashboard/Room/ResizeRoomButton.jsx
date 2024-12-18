import { IconButton, styled } from "@mui/material";
import React from "react";
import CloseFullScreenIcon from "@mui/icons-material/CloseFullscreen";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

const MainContainer = styled("div")({
  position: "absolute",
  bottom: "10px",
  right: "10px",
});

function ResizeRoomButton({ isRoomMinimized, handleRoomResize }) {
  return (
    <MainContainer>
      <IconButton style={{ color: "white" }} onClick={handleRoomResize}>
        {isRoomMinimized ? <OpenInFullIcon /> : <CloseFullScreenIcon />}
      </IconButton>
    </MainContainer>
  );
}

export default ResizeRoomButton;
