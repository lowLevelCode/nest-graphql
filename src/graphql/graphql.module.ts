import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ProductsResolver } from './resolvers/products.resolver';
import { ProductsService } from 'src/core/products/products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema, UserSchema } from 'src/data/schemas/schema';
import { UserService } from 'src/core/auth/user.service';
import { AuthResolver } from './resolvers/auth.resolver';
import { AuthService } from 'src/core/auth/auth.service';

@Module({
    imports:[
        MongooseModule.forFeature([
            { name: 'Product', schema: ProductSchema },
            { name: 'User', schema: UserSchema }
        ]),
        GraphQLModule.forRoot({
            autoSchemaFile: join(process.cwd(), './src/graphql/schema.gql'),
        }),        
    ],
    providers:[
        ProductsResolver,
        AuthResolver,
        ProductsService,
        UserService,
        AuthService
    ]
})
export class GraphqlModule {}
