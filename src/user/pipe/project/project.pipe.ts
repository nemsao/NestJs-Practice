import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CreateProjectDto } from 'src/user/dto/project/create-project.dto';

@Injectable()
export class ProjectPipe implements PipeTransform {
  transform(value: CreateProjectDto, metadata: ArgumentMetadata) {
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
