import { Injectable, CanActivate, ExecutionContext,Controller ,UseGuards} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
export const Roles = Reflector.createDecorator<string[]>();
const Roless=['admin','guest']
@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get(Roles, context.getHandler());
    console.log(roles.map(e=>e))
     if(roles.length>=0 &&  Roless.every(value=>roles.includes(value))  ){
        return false;
     }else{
        return true;
     }
    
  }
}


