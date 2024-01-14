import {  IsNotEmpty, IsNumber } from "class-validator";
import { Task } from "src/user/entities/task.entity";


export class CreateProjectDto {
    @IsNotEmpty()
    name: string;
    @IsNumber()
    process: number;
    @IsNotEmpty()
    startDate: Date;
    @IsNotEmpty()
    endDate: Date;
    tasks: Task[];
}
