import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import InputWithLabel from "../../components/inputWithLabel";
import { validateMail } from "../../utils/validators";
import CustomPrimaryButton from "../../components/CustomPrimaryButton";
import { useDispatch } from "react-redux";
import { sendFriendInvitation } from "../../features/friendsSlice";
function AddFriendDialog({ isDialogOpen, closeDialogHandler }) {
  const [mail, setMail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const dispatch = useDispatch();

  const handleSendInvitation = () => {
    dispatch(
      sendFriendInvitation({ targetMailAddress: mail }, handleCloseDialog)
    );
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail("");
  };

  useEffect(() => {
    setIsFormValid(validateMail(mail));
  }, [mail, setIsFormValid]);

  return (
    <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
      <DialogTitle>
        <Typography>Invite a Friend</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography>
            Enter e-mail address of friend which you would like to invite
          </Typography>
        </DialogContentText>
        <InputWithLabel
          lable="Mail"
          type="text"
          value={mail}
          setValue={setMail}
          placeholder="Enter mail address"
        />
      </DialogContent>
      <DialogActions>
        <CustomPrimaryButton
          onClick={handleSendInvitation}
          disabled={!isFormValid}
          label="Send"
          additionalStyles={{
            marginLeft: "15px",
            marginRight: "15px",
            marginButton: "10px",
          }}
        />
      </DialogActions>
    </Dialog>
  );
}

export default AddFriendDialog;
