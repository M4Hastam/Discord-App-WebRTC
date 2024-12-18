import React from "react";
import { styled } from "@mui/material";
import MainPageButton from "./MainPageButton";
import CreateRoomButton from "./CreateRoomButton";
import { useSelector } from "react-redux";
import ActiveRoomButton from "./ActiveRoomButton";

const MainContainer = styled("div")({
  width: "72px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#202225",
});

function SideBar(props) {
  const { activeRooms, isUserInRoom } = useSelector((state) => state.room);
  return (
    <MainContainer>
      <MainPageButton />
      <CreateRoomButton isUserInRoom={isUserInRoom} />
      {activeRooms.map((room) => {
        return (
          <ActiveRoomButton
            roomId={room.roomId}
            creatorUserName={room.creatorUserName}
            amountOfParticipants={room.participants.length}
            key={room.roomId}
            isUserInRoom={isUserInRoom}
          />
        );
      })}
    </MainContainer>
  );
}

export default SideBar;
