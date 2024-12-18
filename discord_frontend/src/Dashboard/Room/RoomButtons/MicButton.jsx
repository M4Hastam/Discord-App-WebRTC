import React, { useState } from "react";
import { IconButton } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";

function MicButton({ localStream }) {
  const [MicEnabled, setMicEnabled] = useState(true);

  const handleToggleMic = () => {
    localStream.getAudioTracks()[0].enabled = !MicEnabled;
    setMicEnabled(!MicEnabled);
  };

  return (
    <IconButton onClick={handleToggleMic} style={{ color: "white" }}>
      {MicEnabled ? <MicIcon /> : <MicOffIcon />}
    </IconButton>
  );
}

export default MicButton;
