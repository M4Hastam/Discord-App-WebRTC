import React from "react";
import { styled } from "@mui/material";
import { useSelector } from "react-redux";
import FriendsListItem from "./FriendsListItem";

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const checkOnlineUsers = (friends = [], onlineUsers = []) => {
  const fs = friends.map((friend) => {
    const isUserOnline = onlineUsers.find((user) => user.userId === friend.id);

    return { ...friend, isOnline: isUserOnline ? true : false };
  });

  return fs;
};

function FriendsList(props) {
  let { friends, onlineUsers } = useSelector((state) => state.friends);

  return (
    <MainContainer>
      {checkOnlineUsers(friends, onlineUsers).map((f) => (
        <FriendsListItem
          key={f.id}
          username={f.username}
          id={f.id}
          isOnline={f.isOnline}
        />
      ))}
    </MainContainer>
  );
}

export default FriendsList;
