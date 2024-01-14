import { Injectable } from '@nestjs/common';
import { Project } from 'src/user/entities/project.entity';
import {Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProjectDto } from 'src/user/dto/project/create-project.dto';
@Injectable()
export class ProjectService {
    constructor (@InjectRepository(Project) private projectRepository:Repository<Project>){

    }
async  create(createprojectDto: CreateProjectDto) {
    const newUsr=await this.projectRepository.create({...createprojectDto})
    await this.projectRepository.save(newUsr);
    return  'This action adds a new user';
  }

}
