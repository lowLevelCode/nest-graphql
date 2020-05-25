import { InputType, Field, Float } from "@nestjs/graphql";

@InputType()
export class CreatedProductInput {    
    
    @Field()
    nombre:string;

    @Field(()=> Float)
    precio:number;

}