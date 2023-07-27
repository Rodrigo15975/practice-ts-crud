import React, { useState, useEffect } from "react";
import {
  FormRegister,
  InitialValueInputs,
  PropsModal,
} from "./Interfaces/Interfaces";
import { newUserFire } from "./Hooks";
const initialValueInput: InitialValueInputs = {
  id: "",
  name: "",
  email: "",
  username: "",
  urlPhoto: "",
};
const FormRegister = ({ setState }: PropsModal) => {
  const [inputValues, setInputValues] =
    useState<FormRegister["Users"]>(initialValueInput);
  const [notify, setNotify] = useState(false);
  const handleChangeInptus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  const handleSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newUserFire(inputValues);
    setNotify(!notify);
  };

  useEffect(() => {
    if (notify) {
      setTimeout(() => {
        setState();
        setNotify(!notify);
      }, 500);
    }
  }, [notify, setState]);

  return (
    <>
      <form
        onSubmit={handleSubmitRegister}
        action=""
        className="flex  flex-col relative gap-2 pr-2 pl-2 "
      >
        <input
          type="text"
          placeholder="Name"
          className="p-2 rounded-sm"
          name="name"
          value={inputValues.name}
          onChange={handleChangeInptus}
        />
        <input
          type="text"
          placeholder="Username"
          className="p-2 rounded-sm"
          name="username"
          value={inputValues.username}
          onChange={handleChangeInptus}
        />
        <input
          type="text"
          placeholder="Photo"
          className="p-2 rounded-sm"
          name="urlPhoto"
          value={inputValues.urlPhoto}
          onChange={handleChangeInptus}
        />
        <input
          type="text"
          placeholder="Email"
          className="p-2 rounded-sm"
          name="email"
          value={inputValues.email}
          onChange={handleChangeInptus}
        />
        <button
          type="submit"
          className="bg-blue-900 p-2 font-semibold text-indigo-100 "
        >
          New User
        </button>
      </form>
      <p className="text-green-400 font-extrabold text-9xl">
        {notify && "Usuario creado"}
      </p>
    </>
  );
};

export default FormRegister;
