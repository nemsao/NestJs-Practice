import { Injectable } from '@nestjs/common';
import { Project } from 'src/user/entities/project.entity';
import {Repository, Timestamp} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProjectDto } from 'src/user/dto/project/create-project.dto';
import { UpdateUserDto } from 'src/user/dto/user/update-user.dto';
import { UpdateProjectDto } from 'src/user/dto/project/update-project.dto';
const slugify=require('slugify')
@Injectable()
export class ProjectService {
    constructor (@InjectRepository(Project) private projectRepository:Repository<Project>){

    }
async  create(createprojectDto: CreateProjectDto) {
    const newPjc=await this.projectRepository.create({...createprojectDto})
    newPjc.slug=slugify(" "+newPjc.name+" "+Date.now().toString(), {
        replacement: '-', 
        remove:  /[*+~.()'"!:@]/g,
        lower: true,      
        strict: false,    
        locale: 'vi',      
        trim: true         
      })
    return  this.projectRepository.save(newPjc);
  }
  async get(){
    return this.projectRepository.find();
  }
  async  update(updateprojectDto: UpdateProjectDto) {
    return   (await this.projectRepository.update({id:updateprojectDto.id},{ ...updateprojectDto})).raw[0]
  }
  async  delete(id:number) {
   const project=  await this.projectRepository.findOneById(id)
   if(project){
    return  (await this.projectRepository.delete({id:id})).affected
   }else{
     return new Error("Cant find this project")
   }
  
    
  }
}
