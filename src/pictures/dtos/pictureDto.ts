import { Expose } from 'class-transformer';
import { Url } from 'url';

export class PictureDto {
  @Expose()
  url: string;

  @Expose()
  description: string;
}
