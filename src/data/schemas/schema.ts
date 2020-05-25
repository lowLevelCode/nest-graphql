import { Schema } from "mongoose";

export const ProductSchema = new Schema({
    nombre:String,
    precio:Number    
});

export const UserSchema = new Schema({
    nombres:String,
    apellidos:String,
    correo:String,
    contrasenia:String,
    confirmEmail:{ type:Boolean, default:false },
    createdAt:{ type:Date, default:Date.now },
    modifiedAt:{ type:Date, default:Date.now }
});