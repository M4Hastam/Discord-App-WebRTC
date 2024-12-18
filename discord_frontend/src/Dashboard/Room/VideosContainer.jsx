import { styled } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Video from "./Video";

const MainContainer = styled("div")({
  height: "85%",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
});

function VideosContainer(props) {
  const { localStream, screenSharingStream, remoteStreams } = useSelector(
    (state) => state.room
  );

  return (
    <MainContainer>
      <Video
        isLocalStream
        stream={screenSharingStream ? screenSharingStream : localStream}
      />
      {remoteStreams.map((stream) => {
        return <Video key={stream.id} stream={stream} />;
      })}
    </MainContainer>
  );
}

export default VideosContainer;
