import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    name: string;

    @IsNumber()
    id: number;

    @IsEmail()
    email: string;

    @IsEmail()
    password: string;
}