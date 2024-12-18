import React from "react";
import { Button, Typography } from "@mui/material";
import Avatar from "../../../components/Avatar";
import OnlineIndicator from "./OnlineIndicator";
import { useDispatch } from "react-redux";
import { setChosenChatDetails } from "../../../features/chatSlice";

function FriendsListItem({ id, username, isOnline }) {
  const dispatch = useDispatch();

  const handleChooseActiveConversation = () => {
    dispatch(
      setChosenChatDetails({
        chatDetails: { id, name: username },
        chatType: "DIRECT",
      })
    );
  };

  return (
    <Button
      onClick={handleChooseActiveConversation}
      style={{
        width: "100%",
        height: "42px",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textTransform: "none",
        color: "white",
        position: "relative",
      }}
    >
      <Avatar username={username} />
      <Typography
        style={{ marginLeft: "7px", fontWeight: 700, color: "#8e9297" }}
        variant="subtitle1"
        align="left"
      >
        {username}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
}

export default FriendsListItem;
