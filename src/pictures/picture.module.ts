import { Module } from '@nestjs/common';
import { PictureController } from './picture.controller';
import { PictureService } from './picture.service';
import { Picture } from './picture.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from 'src/product/product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Picture])],
  controllers: [PictureController],
  providers: [PictureService, ProductService],
})
export class PictureModule {}
