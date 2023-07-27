import FormRegister from "./FormRegister";

import { PropsModal } from "./Interfaces/Interfaces";

const ModalAddUser = ({ setState }: PropsModal) => {
  const close = () => {
    setState();
  };

  return (
    <div className="fixed  inset-0 bg-slate-300">
      <div className="flex justify-end  m-4 ">
        <button onClick={close} className="p-6 bg-black text-white rounded-md ">
          Cerrar
        </button>
      </div>
      <FormRegister  setState={close} />
    </div>
  );
};

export default ModalAddUser;
