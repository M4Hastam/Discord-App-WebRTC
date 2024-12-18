import { styled } from "@mui/material";
import React, { useState } from "react";
import { sendDirectMessage } from "../../realtimeCommunication/socketConnection";

const MainContainer = styled("div")({
  height: "60px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Input = styled("input")({
  backgroundColor: "#2f3136",
  width: "98%",
  height: "44px",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "14px",
  fontFamily: "Hind Siliguri",
  padding: "0 10px",
});

function NewMessageInput({ chosenChatDetails }) {
  const [message, setMessage] = useState("");

  const handlemessageValueChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (message.length > 0) {
      sendDirectMessage({
        receiverUserId: chosenChatDetails?.id,
        content: message,
      });
      setMessage("");
    }
  };

  return (
    <MainContainer>
      <Input
        placeholder={`Write message to ${chosenChatDetails?.name}`}
        value={message}
        onChange={handlemessageValueChange}
        onKeyDown={handleKeyPressed}
      />
    </MainContainer>
  );
}

export default NewMessageInput;
