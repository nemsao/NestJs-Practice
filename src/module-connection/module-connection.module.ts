import { Module, DynamicModule } from '@nestjs/common';
import { Status } from './connection';
interface ConnectionConfig{
    file:string
}

@Module({
  providers: [Status],
})
export class StatusModule {
  static  register(config:ConnectionConfig):DynamicModule{
    return  {
      module: StatusModule,
      providers:[{
        provide:'Status Module',
        useValue:config.file
      }
      ] ,
      exports: [StatusModule]
    };
  }
}