import { InputType, Field, Float } from "@nestjs/graphql";

@InputType()
export class RegisterUserInput {    
    
    @Field()
    nombres:string;

    @Field()
    apellidos:string;

    @Field()
    correo:string;    

    @Field()
    contrasenia:string;
}