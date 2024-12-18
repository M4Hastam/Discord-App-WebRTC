import { styled } from "@mui/material";
import React from "react";

const AvatarPreview = styled("div")({
  height: "42px",
  width: "42px",
  backgroundColor: "#5865f2",
  borderRadius: "42px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Hind Siliguri",
  fontSize: "20px",
  fontWeight: "700",
  color: "white",
});

function Avatar({ username, large }) {
  return (
    <AvatarPreview style={large ? { height: "80px", width: "80px" } : {}}>
      {username.substring(0, 2)}
    </AvatarPreview>
  );
}

export default Avatar;
