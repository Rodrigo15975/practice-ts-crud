import { Hooks } from "./Interfaces/Interfaces";
//Pasamos parametros para que el modal se habra o se cierre
export const openModal = (setState: Hooks, state: boolean) => {
  setState(!state);
};
