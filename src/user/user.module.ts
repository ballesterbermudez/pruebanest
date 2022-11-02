import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from 'src/product/product.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';
import { Product } from '../product/product.entity';

@Module({
  exports: [UserService],
  imports: [TypeOrmModule.forFeature([User]),TypeOrmModule.forFeature([Product])],
  controllers: [UserController],
  providers: [UserService, ProductService],
})
export class UserModule {}
