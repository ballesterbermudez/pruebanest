import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { DTOcreateProduct } from './dtos/create-product.dto';
import { DTOUpdateProduct } from './dtos/update-product.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {

    constructor(private service: ProductService){}

    @Get('/')
    list(){
        this.service.list();
    }

    @Get('/:id')
    async find(@Param('id') id: string){
        const product = await this.service.find(parseInt(id));
        if(!product){ throw new NotFoundException('user not found')}
        return product;
    }

    @Post('/')
    create(@Body() body: DTOcreateProduct){
        return this.service.create(body.title, body.description || '', body.price);
    }

    @Patch('/:id')
    modify(@Param('id') id:string, @Body() body: DTOUpdateProduct){
        return this.service.modify(parseInt(id), body)
    }

    @Delete('/id')
    delete(@Param('id') id:string){
        return this.service.delete(parseInt(id));
    }
}
