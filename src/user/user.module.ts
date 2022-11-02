import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from 'src/product/product.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';
import { ProductModule } from 'src/product/product.module';
import { PictureModule } from 'src/pictures/picture.module';
import { PictureService } from 'src/pictures/picture.service';

@Module({
  exports: [UserService],
  imports: [TypeOrmModule.forFeature([User]),ProductModule, PictureModule],
  controllers: [UserController],
  providers: [UserService, ProductService, PictureService],
})
export class UserModule {}
