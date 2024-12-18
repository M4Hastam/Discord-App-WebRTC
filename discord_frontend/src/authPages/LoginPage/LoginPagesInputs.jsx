import React from "react";
import InputWithLabel from "../../components/inputWithLabel";

function LoginPagesInputs({ mail, setMail, password, setPassword }) {
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        lable="E-mail"
        type="text"
        placeholder="Enter e-mail address"
      />

      <InputWithLabel
        value={password}
        setValue={setPassword}
        lable="Password"
        type="Password"
        placeholder="Enter password"
      />
    </>
  );
}

export default LoginPagesInputs;
