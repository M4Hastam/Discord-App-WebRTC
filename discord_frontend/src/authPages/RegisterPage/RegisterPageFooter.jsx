import React from "react";
import { useNavigate } from "react-router-dom";
import CustomPrimaryButton from "../../components/CustomPrimaryButton";
import RedirectInfo from "../../components/RedirectInfo";
import { Tooltip } from "@mui/material";

const getFromNotValidMessage = () => {
  return "Username should contains between 3 and 12 characters and password should contains between 6 and 12 characters. Also correct e-mail address should provided";
};
const getFromValidMessage = () => {
  return "Press to Register!";
};

function RegisterPageFooter({ handleRegister, isFormValid }) {
  const navigate = useNavigate();

  const handlePushToLoginPage = () => {
    navigate("/login");
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFromNotValidMessage() : getFromValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{
              marginTop: "30px",
            }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=""
        redirectText="Already have an account?"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
}

export default RegisterPageFooter;
