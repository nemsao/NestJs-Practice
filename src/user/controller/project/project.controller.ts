import {
  Post,
  Controller,
  Req,
  Res,
  Put,
  UsePipes,
  Get,
  Body,
  ValidationPipe,
  Delete,
  Param,UseGuards, UseInterceptors
} from '@nestjs/common';
import { CreateProjectDto } from 'src/user/dto/project/create-project.dto';
import { DeleteProjectDto } from 'src/user/dto/project/delete-project.dto';
import { UpdateProjectDto } from 'src/user/dto/project/update-project.dto';
import { ProjectPipe } from 'src/user/pipe/project/project.pipe';
import { ProjectUpdatePipe } from 'src/user/pipe/project_update/project_update.pipe';
import { ProjectService } from 'src/user/service/project/project.service';
import { RolesGuard,Roles } from 'src/user/auth.guard';
import { InterceptorInterceptor } from 'src/user/interceptor/interceptor.interceptor';

@Controller('project')

export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  @UseGuards(RolesGuard)
  @Roles(['admin'])
  @UseInterceptors(InterceptorInterceptor)
  async create(
    @Body(ProjectPipe) createProjectDto: CreateProjectDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.projectService.create(createProjectDto).then((e) => e);
  }
  @Get()
  async get(@Res({ passthrough: true }) response: Response) {
    return this.projectService.get();
  }
  @Put()
  async update(
    @Body(ProjectUpdatePipe) UpdateProjectDto: UpdateProjectDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.projectService.update(UpdateProjectDto);
  }
  @Delete()
  async delete(
    @Body() deleteProjectDto:DeleteProjectDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    try{await this.projectService.delete(deleteProjectDto.id)
       return {message:"Thêm thành công"};
    }catch(err){
      return {Error:err};
    }
   
  }

}
