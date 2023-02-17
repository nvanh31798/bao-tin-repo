import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";

enum formList {
  login = "Login",
  register = "Register",
}

export const Authentication = () => {
  const [formSelected, setformSelected] = useState(formList.login);

  const handleFormSelect = (formSelected: formList) => {
    setformSelected(formSelected);
  };
  return (
    <div className="text-center text-slate-800">
      <h1 className="text-xl font-bold">Welcom to Bao Tin</h1>
      {formSelected === formList.login && <Login />}
      {formSelected === formList.register && <Register />}
      <div className="flex gap-5 p-5 justify-between text-sm">
        <button className="hover:underline underline-offset-4	" onClick={() => handleFormSelect(formList.login)}>Login</button>
        <button className="hover:underline underline-offset-4	" onClick={() => handleFormSelect(formList.register)}>
          Register
        </button>
      </div>
    </div>
  );
};
