import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { UpdateProjectDto } from 'src/user/dto/project/update-project.dto';
import {HttpException,HttpStatus} from '@nestjs/common'
@Injectable()
export class ProjectUpdatePipe implements PipeTransform {
  transform(value: UpdateProjectDto, metadata: ArgumentMetadata) {
    const transformStartDate=new Date(value.startDate)
    const transformEndDate=new Date(value.endDate)
    if(!transformStartDate || !transformEndDate ){
      throw new HttpException("Invalid Type of date for start date and end date",HttpStatus.BAD_REQUEST)
    }else if(transformStartDate>transformEndDate){
      throw new HttpException("Invalid Value of date start date must'n beyond end date ",HttpStatus.BAD_REQUEST)
    }
    return {...value,startDate:transformStartDate,endDate:transformEndDate };
  }
}
