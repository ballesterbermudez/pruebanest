import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { Serialize } from '../interceptors/serialize.interceptor';
import { CreateUserDto } from './dtos/create-user';
import { UserDto } from './dtos/user.dto';
import { UserService } from './user.service';


@Controller('user')
@Serialize(UserDto)
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    async createUser(@Body() body: CreateUserDto){
        const user = await this.userService.createUser(body.name, body.email, body.password);
        return user;
    }

    @Get()
    async listUsers(){
        return this.userService.listUsers();
    }

    @Get('/:id')
    async findUser(@Param('id') id: string){
        const user = this.userService.findUser(parseInt(id));
        if(!user){
            throw new NotFoundException('user not found!')
        }
        return user;
    }
}
