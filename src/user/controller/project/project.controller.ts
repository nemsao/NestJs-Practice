import { Controller, Req, Res } from '@nestjs/common';
import {
  Post,
  HttpCode,
  UsePipes,
  Header,
  Body,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProjectDto } from 'src/user/dto/project/create-project.dto';
import { ProjectPipe } from 'src/user/pipe/project/project.pipe';
import { ProjectService } from 'src/user/service/project/project.service';
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  async create(
    @Body(ProjectPipe) createProjectDto: CreateProjectDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.projectService.create(createProjectDto).then((e) => e);
  }
}
