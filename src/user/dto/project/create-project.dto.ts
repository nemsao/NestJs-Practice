import { IsDate, IsNotEmpty, IsNumber } from "class-validator";
import { Task } from "src/user/entities/task.entity";


export class CreateProjectDto {
    @IsNotEmpty()
    name: string;
    @IsNumber()
    process: number;
    @IsNotEmpty()
    @IsDate()
    startDate: Date;
    @IsNotEmpty()
    @IsDate()
    endDate: Date;
    tasks: Task[];
}
