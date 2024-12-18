import React, { useEffect } from "react";
import { styled } from "@mui/material";
import SideBar from "./SideBar/SideBar";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";
import { useDispatch } from "react-redux";
import { loglout } from "../utils/auth";
import { SetUserDetails } from "../features/authSlice";
import { connectWithSocketServer } from "../realtimeCommunication/socketConnection";
import { useSelector } from "react-redux";
import Room from "./Room/Room";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  margin: 0,
});

function Dashboard(props) {
  const dispatch = useDispatch();
  const { isUserInRoom } = useSelector((state) => state.room);

  useEffect(() => {
    const userDitails = localStorage.getItem("user");

    if (!userDitails) {
      loglout();
    } else {
      dispatch(SetUserDetails(JSON.parse(userDitails)));
      connectWithSocketServer(JSON.parse(userDitails));
    }
  }, [dispatch]);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
      {isUserInRoom && <Room />}
    </Wrapper>
  );
}

export default Dashboard;
