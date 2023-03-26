import {Body, Controller, Get, Inject, Post, Res} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "../../dto/create-user.dto";
import {LoginUserDto} from "../../dto/loginUser.dto";

@Controller('user')
export class UserController {


    constructor(@Inject(UserService) private UserService:UserService) {
    }

    @Post('/register')
    async register(
        @Body() newUser:CreateUserDto,
    ){
        return this.UserService.register(newUser);
    }

    @Post('/login')
    async login(
        @Body() User:LoginUserDto,
    ){
        return this.UserService.login(User);
    }
}
