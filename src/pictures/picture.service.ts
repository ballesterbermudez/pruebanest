import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product/product.entity';
import { Repository } from 'typeorm';
import { Url } from 'url';
import { Picture } from './picture.entity';

@Injectable()
export class PictureService {
  constructor(@InjectRepository(Picture) private repo: Repository<Picture>) {}

  create(url: string, description: string, product: Product) {
    const picture = this.repo.create({ url, description, product });
    picture.product = product;
    return this.repo.save(picture);
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
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
}
