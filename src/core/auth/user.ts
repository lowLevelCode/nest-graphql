import { Document } from "mongoose";
import * as bcrypt from 'bcrypt';


 export class User 
 {       
    _id?:string;
    nombres:string;
    apellidos:string;
    correo:string;

    private contrasenia:string;

    async hashPassword(password: string) 
    {        
        const salt = await bcrypt.genSalt();        
        this.contrasenia = await bcrypt.hash(password, salt);               
    }

    async sanitizePassword(password: string)
    {        
        return await bcrypt.compare(password,this.contrasenia);
    }
 }