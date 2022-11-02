import { IsAlphanumeric, IsNumber, IsOptional, IsPositive} from 'class-validator';

export class DTOcreateProduct{
    @IsAlphanumeric()
    title: string;
    @IsAlphanumeric()
    @IsOptional()
    description:string;

    @IsNumber()
    @IsPositive()
    price:number;
}