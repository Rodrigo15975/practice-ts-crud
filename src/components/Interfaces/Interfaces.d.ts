//Pasar una funcion,
export interface Hooks {
  (state: boolean): void;
}
export interface PropsModal {
  setState: () => void;
}

export interface InitialValueInputs {
  id: string;
  name: string;
  username: string;
  email: string;
  urlPhoto: string;
}
export interface PropsDbUser {
  propsDbUser: InitialValueInputs[];
}

export interface FormRegister {
  Users: InitialValueInputs;
}

export type AppDbUsers = InitialValueInputs;
