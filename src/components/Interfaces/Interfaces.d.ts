//Pasar una funcion,
export interface Hooks {
  (state: boolean): void;
}

export interface InitialValueInputs {
  id: string;
  name: string;
  username: string;
  email: string
  urlPhoto: string;
}
