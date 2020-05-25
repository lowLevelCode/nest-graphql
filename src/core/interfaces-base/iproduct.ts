import { Document } from "mongoose";

export interface IProducto extends Document {
    id:string;
    nombre:string;
    precio:number;
}