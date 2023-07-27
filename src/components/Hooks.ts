import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

import { AppDbUsers, Hooks, InitialValueInputs } from "./Interfaces/Interfaces";
//Pasamos parametros para que el modal se habra o se cierre
export const openModal = (setState: Hooks, state: boolean) => {
  setState(!state);
};

export const newUserFire = async (dataUser: InitialValueInputs) => {
  const createColletion = collection(db, "crudUsers");
  try {
    //Forma de crear una coleccion
    await addDoc(createColletion, dataUser);
    console.log("creado");
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserFire = (id: string) => {
  return console.log(id);
};

export const getFetchUsersDb = async () => {
  const collectionRef = collection(db, "crudUsers");
  try {
    //Se utiliza getdocs para una mejor moderna
    const querySnapshot = await getDocs(collectionRef);
    const data = querySnapshot.docs.map((doc) => {
      const { id } = doc;
      const getUsers = doc.data() as AppDbUsers;
      return {
        ...getUsers,
        id,
      };
    });
    return data;
  } catch (error) {
    console.error(`Error fetching documents: ${error}`);
    throw error;
  }
};
