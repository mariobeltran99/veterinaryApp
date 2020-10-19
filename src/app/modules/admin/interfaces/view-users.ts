export interface ViewUsers {
    id:string;
    name:string;
    lastname:string;
    displayName: string;
    email:string;
    dui:string;
    age:number;
    photoURL:string;
    role?:string;
    disabled:boolean;
    createDate?:Date;
}
