export type Roles = 'Administrador' | 'Cliente' | 'Veterinario' | 'Bodeguero';
export interface Users {
  uid: string;
  email: string;
  name?: string;
  lastname?: string;
  dui?: string;
  age?:number;
  displayName?: string;
  photoURL?: string;
  createDate?: Date;
  role?: Roles;
  disabled?: boolean;
}
