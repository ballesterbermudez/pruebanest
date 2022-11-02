import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Url } from 'url';
import { Picture } from './picture.entity';

@Injectable()
export class PictureService {
  constructor(@InjectRepository(Picture) private repo: Repository<Picture>) {}

  create(url: string, description: string) {
    const picture = this.repo.create({ url, description });
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
