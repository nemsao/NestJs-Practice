import {IsNotEmpty} from 'class-validator'
import { Task } from 'src/user/entities/task.entity';

export class UpdateProjectDto  {
    @IsNotEmpty()
    id: number;
    name: string;
    process: number;
    startDate: Date;
    endDate: Date;
    tasks: Task[];
}
