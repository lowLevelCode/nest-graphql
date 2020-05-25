import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel} from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { RegisterUserDTO } from './dtos/register-user.dto';
import { LoginUserDTO } from './dtos/login-user';
import { IUserDocument } from 'src/data/documents/iuser.document';
import { User } from './user';


@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<IUserDocument>){}

    async register(registerUserDTO:RegisterUserDTO):Promise<IUserDocument> 
    {        

        const {correo, contrasenia} = registerUserDTO;        
        const userExist = await this.userModel.findOne({correo})
        
        if(userExist)
        throw new HttpException("El correo ya existe", HttpStatus.BAD_REQUEST);
        
        let user:User = new User();
        Object.assign(user, registerUserDTO);
        await user.hashPassword(contrasenia);

        const createdUser = new this.userModel(user);        
        return await createdUser.save();

    }


    async login(loginUserDTO:LoginUserDTO):Promise<IUserDocument> 
    {
        const {correo, contrasenia} = loginUserDTO;        
        const userExist = await this.userModel.findOne({correo});
        
        let user:User = new User();
        Object.assign(user, userExist.toObject());                                    

        if(!userExist || ! await user.sanitizePassword(contrasenia))
            throw new HttpException("Correo o contraseña invalidos.", HttpStatus.UNAUTHORIZED);                 

        return userExist;
    }    

    async findAll():Promise<IUserDocument[]> 
    {
        return await this.userModel.find().exec();        
    }
}
