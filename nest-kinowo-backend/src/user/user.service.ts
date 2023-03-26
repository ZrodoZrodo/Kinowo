import { Injectable } from '@nestjs/common';
import prisma from "../../prisma/prisma";
import {CreateUserDto} from "../../dto/create-user.dto";
import * as bcrypt from 'bcrypt';
import {LoginUserDto} from "../../dto/loginUser.dto";

@Injectable()
export class UserService {


    async register({name,lastName,email,password}:CreateUserDto):Promise<{status:number,message:string}>{
        try {


            password=await bcrypt.hash(password,process.env.SALT)
            console.log(password)
             await prisma.user.create({
                data: {
                    email,
                    name,
                    password,
                    lastName,
                }

            })
            return {status:201,message:"Created"}
        }catch(e)
        {
            return e.code=='P2002'?{status:409,message:"This email already exist"}:e.message
        }
        }

       async login({email,password}:LoginUserDto){
        password=await bcrypt.hash(password,process.env.SALT)
           console.log(password)
        return await prisma.user.findFirst({
            where:{email,password},
            select:{
                id:true,
                name:true,
                email:true,
            }
        })
       }
}
