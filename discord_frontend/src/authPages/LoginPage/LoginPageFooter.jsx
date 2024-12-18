import React from "react";
import { useNavigate } from "react-router-dom";
import CustomPrimaryButton from "../../components/CustomPrimaryButton";
import RedirectInfo from "../../components/RedirectInfo";
import { Tooltip } from "@mui/material";

const getFromNotValidMessage = () => {
  return "Enter correct e-mail address and password should contains between 6 and 12 characters";
};
const getFromValidMessage = () => {
  return "Press to log in!";
};

function LoginPageFooter({ handleLogin, isFormValid }) {
  const navigate = useNavigate();

  const handlePushToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFromNotValidMessage() : getFromValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Log in"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account "
        redirectText="Create an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
}

export default LoginPageFooter;
