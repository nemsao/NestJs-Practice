import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
  HttpCode,
  Head,
  Header,
  Request,
  Redirect,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from '../../service/user/user.service';
import { CreateUserDto } from '../../dto/user/create-user.dto';
import { UpdateUserDto } from '../../dto/user/update-user.dto';
import { Observable, Observer } from 'rxjs';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Post('create')
  @UsePipes(ValidationPipe)
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('cat/:id')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  @Header('Cache-Control', 'none')
  findAll(
    @Param('id') id: number,
    @Res({ passthrough: true }) response: Response,
  ): Observable<number> {
    const observable: Observable<number> = new Observable((observer) => {
      try {
        return observer.next(id);
      } catch (err) {
        return observer.error(err);
      }
    });

    const observer: Observer<number> = {
      next: (id: number): number => {
        console.log('id' + id);
        const news = id;
        return news;
      },
      error: (error: Error) => error,
      complete: () => 'done',
    };
    observable.subscribe(observer);
    return observable;
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(302)
  @Redirect('localhost:3000', 302)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return { url: '/localhost:3000/user/cat/21', statusCode: 302 };
  }

  @Delete(':id')
  @HttpCode(200)
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
