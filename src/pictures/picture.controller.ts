import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { PictureService } from './picture.service';
import { createPictureDto } from './dtos/createPictureDto';
import { SerializeInterceptor } from 'src/interceptors/serialize.interceptor';
import { PictureDto } from './dtos/pictureDto';
import { Product } from 'src/product/product.entity';
import { ProductService } from 'src/product/product.service';

@Controller('picture')
export class PictureController {
  constructor(
    private pictureService: PictureService,
   
  ) {}

  @Post()
  async createPicture(@Body() body: createPictureDto) {
    
    return this.pictureService.create(body.url, body.description);
  }

  @UseInterceptors(new SerializeInterceptor(PictureDto))
  @Get()
  listPictures() {
    return this.pictureService.find();
  }

  @UseInterceptors(new SerializeInterceptor(PictureDto))
  @Get('/:id')
  getPicture(@Param('id') id: string) {
    return this.pictureService.findOne(parseInt(id));
  }

  @Delete('/:id')
  deletePicture(@Param('id') id: string) {
    return this.pictureService.delete(parseInt(id));
  }
}
