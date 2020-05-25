import { ObjectType, Field, ID, Float } from "@nestjs/graphql";

@ObjectType()
export class UserType {

    @Field(()=> ID)
    _id:string;

    @Field()    
    nombres:string;

    @Field()
    apellidos:string;

    @Field()
    correo:string;    

    @Field()
    confirmEmail:boolean;    

    @Field()
    createdAt:Date;    

    @Field()
    modifiedAt:Date;    
}