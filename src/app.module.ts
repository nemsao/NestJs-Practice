import { Module, NestModule, Scope,MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import * as dotenv from 'dotenv'
import { User } from './user/entities/user.entity';
import { Project } from './user/entities/project.entity';
import { Task } from './user/entities/task.entity';
import { Status } from './user/entities/status.entity';
import { InvitedId } from './user/entities/inviteId.entity';
import { Priority } from './user/entities/priority.entity';
import { UserModule } from './user/user.module';
import { StatusModule } from './module-connection/module-connection.module';
import {projectmiddleware}from './user/project.middleware'
dotenv.config()

const { USER, PASSWORD, DATABASE ,PORT_DATA,HOST} = process.env
@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: HOST,
    port: parseInt(PORT_DATA),
    username: USER,
    password: PASSWORD,
    database: DATABASE,
    synchronize: true,
    entities: [User,Project,Task,Status,InvitedId,Priority],
  }),UserModule, StatusModule.register({file:'Status'})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(projectmiddleware)
      .forRoutes('project');
  }
}
