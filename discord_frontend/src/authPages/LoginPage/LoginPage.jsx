import React, { useState, useEffect } from "react";
import AuthBox from "../../components/AuthBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPagesInputs from "./LoginPagesInputs";
import LoginPageFooter from "./LoginPageFooter";
import { validateLoginForm } from "../../utils/validators";
import { useDispatch } from "react-redux";
import { login } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";

function LoginPage(props) {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const userDetails = {
      mail,
      password,
    };

    dispatch(login(userDetails, navigate));
  };

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
  }, [mail, password, setIsFormValid]);

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPagesInputs
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
}

export default LoginPage;
