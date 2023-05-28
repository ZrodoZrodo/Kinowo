
import {Controller, Request, Post, UseGuards, Get} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {LocalAuthGuard} from "./auth/local-auth.guard";
import {AuthService} from "./auth/auth.service";
import {JwtAuthGuard} from "./auth/jwt-auth.guard";

@Controller()
export class AppController {

  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    console.log("hh")
    return {
      token:await this.authService.login(req.user),
      user:req.user,
    };


  }

}
