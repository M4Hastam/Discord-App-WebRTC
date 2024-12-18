import { styled } from "@mui/material";
import React, { useEffect } from "react";
import Messages from "./Messages/Messages";
import NewMessageInput from "./NewMessageInput";
import { getDirectChatHistory } from "../../realtimeCommunication/socketConnection";

const Wrapper = styled("div")({
  flexGrow: 1,
});

function MessengerContent({ chosenChatDetails }) {
  useEffect(() => {
    getDirectChatHistory({
      receiverUserId: chosenChatDetails?.id,
    });
  }, [chosenChatDetails]);

  return (
    <Wrapper>
      <Messages chosenChatDetails={chosenChatDetails} />
      <NewMessageInput chosenChatDetails={chosenChatDetails} />
    </Wrapper>
  );
}

export default MessengerContent;
