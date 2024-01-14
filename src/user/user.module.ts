import { Module } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { UserService } from './service/user/user.service';
import { ProjectController } from './controller/project/project.controller';
import { ProjectService } from './service/project/project.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Project } from './entities/project.entity';


@Module({
  imports:[TypeOrmModule.forFeature([User,Project]) ],
  controllers: [UserController, ProjectController],
  providers: [UserService, ProjectService],
  exports:[UserService,ProjectService]
})
export class UserModule {}
