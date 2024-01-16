import { Injectable, Scope } from '@nestjs/common';
import { CreateUserDto } from '../../dto/user/create-user.dto';
import { UpdateUserDto } from '../../dto/user/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
@Injectable({scope:Scope.TRANSIENT})
export class UserService {
    constructor (@InjectRepository(User) private userRepository:Repository<User>){

    }
async  create(createUserDto: CreateUserDto) {
    const newUsr=await this.userRepository.create({...createUserDto,createdAt:Date.now()})
    await this.userRepository.save(newUsr);
    return  'This action adds a new user';
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({
        where:{
            id:id
        }
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({id},{...updateUserDto});
  }

  remove(id: number) {
    return this.userRepository.delete({id:id});
  }
}
