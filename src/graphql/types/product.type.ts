import { ObjectType, Field, ID, Float } from "@nestjs/graphql";

@ObjectType()
export class ProductType {

    @Field(()=> ID)
    id:String;

    @Field()
    nombre:String;

    @Field(()=> Float)
    precio:number;

}