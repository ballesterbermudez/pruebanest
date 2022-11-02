import { IsString, IsUrl } from 'class-validator';
import { Url } from 'url';

export class createPictureDto {
  @IsUrl()
  url: string;

  @IsString()
  description: string;
}
