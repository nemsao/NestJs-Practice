import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsNumber } from "class-validator";
import { IsNull } from "typeorm";


export class CreateUserDto {
    @IsNotEmpty()  
    username:string;
    @IsNotEmpty()  
    password:string;
    @IsNotEmpty()  
    @IsEmail()
    email:string;

    @IsDate()
    dateOfBirth:Date;
    @IsBoolean()
    isActive:boolean;
    @IsNotEmpty()
    @IsNumber()
    invitedId:string

}
