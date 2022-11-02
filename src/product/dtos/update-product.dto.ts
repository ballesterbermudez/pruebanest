import { IsAlphanumeric, IsNumber, IsOptional, IsPositive} from 'class-validator';

export class DTOUpdateProduct{
    @IsAlphanumeric()
    @IsOptional()
    title: string;
    @IsAlphanumeric()
    @IsOptional()
    description:string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    price:number;
}