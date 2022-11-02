import { Expose } from 'class-transformer';
import { Product } from 'src/product/product.entity';
import { Url } from 'url';

export class PictureDto {
  @Expose()
  url: string;

  @Expose()
  description: string;

  @Expose()
  product: Product;
}
