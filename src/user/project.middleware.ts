import { Injectable,NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class projectmiddleware implements NestMiddleware{
 use(req:Request,res:Response,next:NextFunction){
    console.log(req.url)
    next()
 }
}