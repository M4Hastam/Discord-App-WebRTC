import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
function ChosenChatDetails(props) {
  const ChatDetails = useSelector((state) => state.chat.chosenChatDetails);

  return (
    <Typography
      sx={{
        fontSize: "16px",
        color: "white",
        fontWeight: "bold",
        fontFamily: "Hind Siliguri",
      }}
    >
      {ChatDetails ? `Chosen conversation : ${ChatDetails?.name}` : ""}
    </Typography>
  );
}

export default ChosenChatDetails;
