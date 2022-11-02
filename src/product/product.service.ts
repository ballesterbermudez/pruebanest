import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PictureService } from 'src/pictures/picture.service';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) public repo: Repository<Product>,
        private picServ: PictureService){}

    list(){
        return this.repo.find();
    }

    async find(id: number){
        
        let product = null;

        if(id)
        { 
            product = await this.repo.findOne({where: {id: id}, relations: ['pictures']})
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

    async addPicture(id: number, idPic: number){
        const pic = await this.picServ.findOne(idPic);
        const prod = await this.find(id) as Product;

        if(!prod)
        {
            throw new NotFoundException('product not found')
        }
        if(!pic)
        {
            throw new NotFoundException('Pic not found')
        }
        
       

        if(!prod.pictures)
        {
            prod.pictures = []
        }
        else if(!prod.pictures.find((value) => {return value.id === pic.id}))
        {
            prod.pictures.push(pic)
        }
    

        console.log(prod);
        await this.picServ.modify(idPic, {product: prod});
        

        return this.repo.save(prod);
    }
}
