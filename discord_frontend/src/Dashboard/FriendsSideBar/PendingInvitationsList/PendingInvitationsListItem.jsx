import { Box, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import Avatar from "../../../components/Avatar";
import InvitationDecisionButtons from "./InvitationDecisionButtons";
import { useDispatch } from "react-redux";
import {
  acceptFriendInvitation,
  rejectFriendInvitation,
} from "../../../features/friendsSlice";

function PendingInvitationsListItem({ id, username, mail }) {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const dispatch = useDispatch();

  const handleAcceptInvitation = () => {
    dispatch(acceptFriendInvitation({ id }));
    setButtonDisabled(true);
  };

  const handleRejectInvitation = () => {
    dispatch(rejectFriendInvitation({ id }));
    setButtonDisabled(true);
  };

  {
    return (
      <Tooltip title={mail}>
        <div style={{ width: "100%" }}>
          <Box
            sx={{
              width: "100%",
              height: "42px",
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Avatar username={username} />
            <Typography
              sx={{
                marginLeft: "7px",
                fontWeight: 700,
                color: "#8e9297",
                flexGrow: 1,
              }}
              variant="subtitle1"
            >
              {username}
            </Typography>
            <InvitationDecisionButtons
              disabled={buttonDisabled}
              acceptFriendInvitationHandler={handleAcceptInvitation}
              rejectFriendInvitationHandler={handleRejectInvitation}
            />
          </Box>
        </div>
      </Tooltip>
    );
  }
}

export default PendingInvitationsListItem;
