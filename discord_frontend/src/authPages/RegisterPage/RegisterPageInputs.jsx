import React from "react";
import InputWithLabel from "../../components/inputWithLabel";
function RegisterPageInputs({
  mail,
  setMail,
  password,
  setPassword,
  username,
  setUsername,
}) {
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        lable="E-mail address"
        type="text"
        placeholder="Enter e-mail address"
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        lable="Username"
        type="text"
        placeholder="Enter a username"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        lable="password"
        type="password"
        placeholder="Enter password"
      />
    </>
  );
}

export default RegisterPageInputs;
