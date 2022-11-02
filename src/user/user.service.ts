import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity'

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private repo: Repository<User>){}

    createUser(name: string, email:string, password:string){
        const user = this.repo.create({name, email, password});
        return this.repo.save(user);
    }

    listUsers(){
        return this.repo.find();
    }

    findUser(id: number){
        if(!id){
            return null;
        }
        return this.repo.findOneBy({id});
    }
}
