import { Typography, styled } from "@mui/material";
import React from "react";
import Avatar from "../../../components/Avatar";

const MainContainer = styled("div")({
  width: "97%",
  display: "flex",
  marginTop: "10px",
});

const AvatarContainer = styled("div")({
  width: "70px",
});

const MessageContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const MessageContent = styled("div")({
  color: "#DCDDDE",
  fontFamily: "Outfit",
});

const SameAuthorMessageContent = styled("div")({
  color: "#DCDDDE",
  width: "97%",
  fontFamily: "Outfit",
});

const SameAuthorMessageText = styled("span")({
  marginLeft: "70px",
});

function Message({ content, sameAuthor, username, date, sameDay }) {
  if (sameAuthor && sameDay) {
    return (
      <SameAuthorMessageContent>
        <SameAuthorMessageText>{content}</SameAuthorMessageText>
      </SameAuthorMessageContent>
    );
  }

  return (
    <MainContainer>
      <AvatarContainer>
        <Avatar username={username} />
      </AvatarContainer>
      <MessageContainer>
        <Typography
          style={{
            fontSize: "16px",
            color: "white",
            fontFamily: "Hind Siliguri",
          }}
        >
          {username}{" "}
          <span style={{ fontSize: "12px", color: "#72767d" }}>{date}</span>
        </Typography>
        <MessageContent>{content}</MessageContent>
      </MessageContainer>
    </MainContainer>
  );
}

export default Message;
