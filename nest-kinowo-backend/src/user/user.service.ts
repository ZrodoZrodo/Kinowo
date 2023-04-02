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
        try {
            password = await bcrypt.hash(password, process.env.SALT)
            return await prisma.user.findFirst({
                where: {email, password},
                select: {
                    id: true,
                    name: true,
                    email: true,
                }
            })
        }
        catch (e)
        {
            console.log(e.code+" "+e.message)
        }
       }
       async getUser(id:string){
        return await prisma.user.findFirst({
            where:{id},
            select:{
                id:true,
                email:true,
                name:true,
                lastName:true,
            }
        })
       }
       async getUserActiveReservations(id:string)
       {
           return await prisma.user.findFirst({
               where:{id},
               select:{
                    reservations:{
                        where:{watched:true},
                    }
               }
           })
       }

    async getUserComingReservations(id:string)
    {
        return await prisma.user.findFirst({
            where:{id},
            select:{
                reservations:{
                    where:{watched:false},
                }
            }
        })
    }

       async createReservation(
           userId:string,
           movieId:string,
           title:string,
           date:Date,
           price:number,
           screeningNumber:number,
           seatNumber :number
       ){
        return await prisma.reservation.create({
            data:{
                movieId,
                title,
                date,
                price,
                screeningNumber,
                seatNumber,
                user:{
                    connect:{
                        id:userId
                    }
                }
            }
        })
    }
    async updateUser(
        email:string,
        name:string,
        lastName:string,
        id:string)
    {
        return prisma.user.update({
            where:{id},
        data:{email,
            name,
            lastName,
        }

        })
    }

}
