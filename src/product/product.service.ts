import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) public repo: Repository<Product>){}

    list(){
        return this.repo.find();
    }

    async find(id: number){
        
        let product = null;

        if(id)
        { 
            product = await this.repo.findOneBy({id})
        }
        return product;
    }

    async create(title: string, description:string, price: number){
        const product = this.repo.create({title,description,price});

        return this.repo.save(product);
    }

    async modify(id: number, data: Partial<Product>){
        
        const product= await this.find(id);

        if(!product){ throw new NotFoundException('user not found')}
        Object.assign(product,data);

        return this.repo.save(product);
    }

    async delete(id){
        const product= await this.find(id);

        if(!product){ throw new NotFoundException('user not found')}

        return this.repo.remove(product);
    }
}
