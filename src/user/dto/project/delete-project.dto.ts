import {IsNotEmpty} from 'class-validator'
export class DeleteProjectDto  {
    @IsNotEmpty()
    id: number;
}
