import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../entities/project.entity';
@Injectable()
export class InterceptorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Project> {
   console.log( context.getClass().name)
    return next.handle().pipe(map((proj)=>{delete proj.id;return proj }  ));
  }
}
