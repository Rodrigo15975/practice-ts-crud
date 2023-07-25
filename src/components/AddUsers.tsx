import { useState } from "react";
import { openModal } from "./Hooks";
import ModalAddUser from "./ModalAddUser";

const AddUsers = () => {
  const [abrir, setAbrir] = useState<boolean>(false);

  const openAddUser = () => {
    openModal(setAbrir, abrir);
  };

  return (
    <div>
      <button
        className="bg-black text-white p-4 rounded-sm"
        onClick={openAddUser}
      >
        Add Users
      </button>
      <div>{abrir && <ModalAddUser />}</div>
    </div>
  );
};

export default AddUsers;
