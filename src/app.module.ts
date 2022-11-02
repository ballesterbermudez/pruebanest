import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { PictureModule } from './pictures/picture.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Picture } from './pictures/picture.entity';
import { User } from './user/user.entity';

@Module({
  imports: [
    UserModule,
    ProductModule,
    PictureModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.prueba',
      entities: [Picture, User],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
