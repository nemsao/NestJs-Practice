import { Controller } from '@nestjs/common';
import { Post,HttpCode,Header,Body } from '@nestjs/common';
import { CreateProjectDto } from 'src/user/dto/project/create-project.dto';
import { ProjectService } from 'src/user/service/project/project.service';
@Controller('project')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) {}

    @Post('create')
    @HttpCode(204)
    @Header('Cache-Control','none')
    create(@Body() createProjectDto:CreateProjectDto ) {
      return    this.projectService.create(createProjectDto);
    }
  

}
