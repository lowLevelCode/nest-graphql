import { Resolver, Query, Args, Mutation, ID } from "@nestjs/graphql";
import { RegisterUserInput } from "../inputs/register-user.input";
import { RegisterUserDTO } from "src/core/auth/dtos/register-user.dto";
import { UserType } from "../types/user.type";
import { LoginUserInput } from "../inputs/login-user";
import { LoginUserDTO } from "src/core/auth/dtos/login-user";
import { AuthService } from "src/core/auth/auth.service";


@Resolver()
export class AuthResolver {  

  constructor(private readonly authService:AuthService){}

  @Query(()=>[UserType])
  async usuarios() {    
      return this.authService.findAll();
  } 

  @Query(()=>UserType)
  async login(@Args('user') loginUserInput :LoginUserInput) {    
    
    let loginUserDTO:LoginUserDTO = { ...loginUserInput };

    return await this.authService.login(loginUserDTO);      
  } 

  @Mutation(()=> UserType)
  async registerUser(@Args('user') registerUserInput :RegisterUserInput) {      
      let registerUserDTO:RegisterUserDTO = { ...registerUserInput };      
      return await this.authService.register(registerUserDTO);      
  } 
}