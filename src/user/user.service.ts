import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductService } from '../product/product.service';
import { Repository } from 'typeorm';
import { User } from './user.entity'


@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private repo: Repository<User>, private productService: ProductService){}

    createUser(name: string, email:string, password:string){
        const user = this.repo.create({name, email, password});
        return this.repo.save(user);
    }

    listUsers(){
        return this.repo.find();
    }

    findUser(id: number){
        if(!id){
            return null;
        }
        return this.repo.findOneBy({id});
    }

    async addProduct(id: number, prodId: number){
        const user = await this.repo.findOneBy({id});
        const prod = await this.productService.find(prodId);
        user.products.push(prod);
    }
}
