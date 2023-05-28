import {
  Body,
  Controller,
  Get, HttpCode,
  Inject,
  Param,
  Post,
  Put,
  Res, UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { LoginUserDto } from '../../dto/loginUser.dto';
import { CreateReservationDto } from '../../dto/CreateReservationDto';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('user')
export class UserController {
  constructor(@Inject(UserService) private UserService: UserService) {}


  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async getUser(@Param() id: {id:string}) {

    return this.UserService.getUser(id.id);
  }
  @Get('/UserActiveReservations/:id')
  async getUserActiveReservations(@Param() id: string) {
    return this.UserService.getUserActiveReservations(id);
  }
  @Get('/UserComingReservations/:id')
  async getUserComingReservations(@Param() id: string) {
    return this.UserService.getUserComingReservations(id);
  }

  @Post('/register')
  async register(@Body() newUser: CreateUserDto) {
    return this.UserService.register(newUser);
  }


  @Post('/createReservation')
  async createReservation(@Body() Reservation: CreateReservationDto) {
    return this.UserService.createReservation(Reservation);
  }

  @Put('/:id')
  async updateUser(
    @Body()
    user: { email: string; name: string; lastName: string; token: string },
    @Param() id: string,
  ) {
    return this.UserService.updateUser(
      user.email,
      user.name,
      user.lastName,
      id,
    );
  }

  @Post('/addOpinion')
  async addOpinion(
    @Body()
    opinion: {
      userid: string;
      movieId: string;
      movieTitle: string;
      description: string;
      rate: string;
      token: string;
    },
  ) {
    return this.UserService.addOpinion(opinion);
  }
}
