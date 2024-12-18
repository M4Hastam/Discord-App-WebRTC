import React from "react";
import { styled } from "@mui/material";
import PendingInvitationsListItem from "./PendingInvitationsListItem";
import { useSelector } from "react-redux";

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});

function PendingInvitationsList(props) {
  const { pendingFriendsInvitations } = useSelector((state) => state.friends);
  return (
    <MainContainer>
      {pendingFriendsInvitations.map((invitation) => {
        return (
          <PendingInvitationsListItem
            key={invitation._id}
            id={invitation._id}
            username={invitation.senderId.username}
            mail={invitation.senderId.mail}
          />
        );
      })}
    </MainContainer>
  );
}

export default PendingInvitationsList;
