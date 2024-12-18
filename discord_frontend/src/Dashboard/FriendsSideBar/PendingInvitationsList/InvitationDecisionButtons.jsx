import { Box, IconButton } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
function InvitationDecisionButtons({
  disabled,
  acceptFriendInvitationHandler,
  rejectFriendInvitationHandler,
}) {
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        style={{ color: "white" }}
        disabled={disabled}
        onClick={acceptFriendInvitationHandler}
      >
        <CheckIcon />
      </IconButton>

      <IconButton
        style={{ color: "white" }}
        disabled={disabled}
        onClick={rejectFriendInvitationHandler}
      >
        <ClearIcon />
      </IconButton>
    </Box>
  );
}

export default InvitationDecisionButtons;
