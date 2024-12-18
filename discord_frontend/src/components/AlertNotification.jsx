import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { useSelector } from "react-redux";
import { closeAlertMessage } from "../features/alertSlice";
import { useDispatch } from "react-redux";
function AlertNotification(props) {
  const { showAlertMessage, alertMessageContent } = useSelector(
    (state) => state.alert
  );
  const dispatch = useDispatch();

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={showAlertMessage}
      onClose={() => {
        dispatch(closeAlertMessage());
      }}
      autoHideDuration={6000}
    >
      <Alert severity="info">{alertMessageContent}</Alert>
    </Snackbar>
  );
}

export default AlertNotification;
