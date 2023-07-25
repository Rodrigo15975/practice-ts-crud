import React from "react";
import FormRegister from "./FormRegister";

const ModalAddUser = () => {
  return (
    <div className="fixed  inset-0 bg-slate-300" >
      <FormRegister />
    </div>
  );
};

export default ModalAddUser;
