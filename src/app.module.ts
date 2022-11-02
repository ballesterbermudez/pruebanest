import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { PictureModule } from './pictures/picture.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Picture } from './pictures/picture.entity';
import { User } from './user/user.entity';
import { Product } from './product/product.entity';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    UserModule,
    ProductModule,
    PictureModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.prueba.sqlite',
      entities: [Picture, User, Product],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_PIPE, useValue: new ValidationPipe({ whitelist: true }) },
  ],
})
export class AppModule {}
