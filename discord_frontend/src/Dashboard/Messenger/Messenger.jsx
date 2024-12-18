import React from "react";
import { styled } from "@mui/material";
import { useSelector } from "react-redux";
import WelcomeMessage from "./WelcomeMessage";
import MessengerContent from "./MessengerContent";
const MainContainer = styled("div")({
  flexGrow: 1,
  backgroundColor: "#36393f",
  marginTop: "48px",
  display: "flex",
});

function Messenger() {
  const ChatDetails = useSelector((state) => state.chat.chosenChatDetails);

  return (
    <MainContainer>
      {!ChatDetails ? (
        <WelcomeMessage />
      ) : (
        <MessengerContent chosenChatDetails={ChatDetails} />
      )}
    </MainContainer>
  );
}

export default Messenger;
