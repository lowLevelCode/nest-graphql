import { Injectable } from '@nestjs/common';
import { InjectModel} from "@nestjs/mongoose";
import { IProducto } from '../interfaces-base/iproduct';
import { Model } from 'mongoose';
import { CreatedProductDTO } from './dtos/created-product.dto';


@Injectable()
export class ProductsService {

    constructor(@InjectModel('Product') private readonly productModel: Model<IProducto>){}

    async create(createdProductDTO:CreatedProductDTO):Promise<IProducto> {
        const createdProducto = new this.productModel(createdProductDTO);        
        return await createdProducto.save();
    }

    async findAll():Promise<IProducto[]> {
        return await this.productModel.find().exec();
    }

    async findById(id:string): Promise<IProducto>{
        return await this.productModel.findById(id);
    }
}
