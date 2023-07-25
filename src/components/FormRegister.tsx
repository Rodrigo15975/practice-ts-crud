import { useState, useEffect } from "react";
import { InitialValueInputs } from "./Interfaces/Interfaces";

const initialValueInput: InitialValueInputs = {
  id: "",
  name: "",
  email: "",
  username: "",
  urlPhoto: "",
};

const FormRegister = () => {
  const [inputValues, setInputValues] = useState();

  return (
    <>
      <form action="" className="flex  flex-col relative">
        <button
          type="button"
          className="absolute right-0 bg-black p-4 text-white"
        >
          Close
        </button>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Photo" />
        <button type="submit" className="bg-red-400 p-2">
          New User
        </button>
      </form>
    </>
  );
};

export default FormRegister;
