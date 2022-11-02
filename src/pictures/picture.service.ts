import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product/product.entity';
import { Repository } from 'typeorm';
import { Picture } from './picture.entity';

@Injectable()
export class PictureService {
  constructor(@InjectRepository(Picture) private repo: Repository<Picture>) {}

  create(url: string, description: string) {
    const picture = this.repo.create({ url, description});
    return this.repo.save(picture);
  }

  async findOne(id: number) {
    const pic = await this.repo.findOne({where: {id: id}, relations: ['product']});
    return pic
  }

  find() {
    return this.repo.find();
  }

  async delete(id: number) {
    const picture = await this.findOne(id);
    if (!picture) {
      throw new NotFoundException('No se encontro la picture');
    }
    return this.repo.remove(picture);
  }

  async modify(id: number, data: Partial<Picture>){
        
    const pic= await this.findOne(id)

    if(!pic){ throw new NotFoundException('user not found')}
    Object.assign(pic,data);

    return this.repo.save(pic);
}
}
