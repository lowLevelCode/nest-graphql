import { Resolver, Query, Args, Mutation, ID } from "@nestjs/graphql";
import { ProductsService } from "src/core/products/products.service";
import { ProductType } from "../types/product.type";
import { CreatedProductInput } from "../inputs/created-product.input";
import { CreatedProductDTO } from "src/core/products/dtos/created-product.dto";

@Resolver()
export class ProductsResolver {  

  constructor(private readonly productsService:ProductsService){}

  @Query(()=>[ProductType])
  async productos() {    
      return this.productsService.findAll();
  } 

  @Query(()=>ProductType)
  async producto(@Args({ name:'id', type:() => ID }) id :string) {    
      return this.productsService.findById(id); 
  } 

  @Mutation(()=> ProductType)
  async createProduct(@Args('input') createdProductInput :CreatedProductInput) {      
      let createdProductDTO:CreatedProductDTO = { ...createdProductInput };      
      return this.productsService.create(createdProductDTO);
  } 
}