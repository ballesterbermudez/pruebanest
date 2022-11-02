import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PictureModule } from 'src/pictures/picture.module';
import { PictureService } from 'src/pictures/picture.service';
import { ProductController } from './product.controller';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product]),PictureModule],
  controllers: [ProductController],
  providers: [ProductService, PictureService],
  exports: [TypeOrmModule.forFeature([Product])]
})
export class ProductModule {}
