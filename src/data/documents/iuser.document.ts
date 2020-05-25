import { Document } from "mongoose";

export interface IUserDocument extends Document {
    _id:string;
    nombres:string;
    apellidos:string;
    correo:string;
    contrasenia:string;    
    confirmEmail:boolean;
    createdAt:Date;
    modifiedAt:Date;
}