import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CinemaService } from './cinema.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateReservationDto } from '../../dto/CreateReservationDto';

@Controller('cinema')
export class CinemaController {
  constructor(@Inject(CinemaService) private CinemaService: CinemaService) {}
  @Get('/getAll/:id')
  async getAll(@Param() id: string) {
    return this.CinemaService.getAll(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/getOne/:title')
  async getOne(@Param() title: string) {
    return this.CinemaService.getOne(title);
  }
  @UseGuards(JwtAuthGuard)
  @Get('/getOneDetails/:id')
  async getOneDetails(@Param() id: string) {
    return this.CinemaService.getOneDetails(id);
  }
  @UseGuards(JwtAuthGuard)
  @Get('/getMovies/:id')
  async getMovies(@Param() id: string) {
    return this.CinemaService.getMovies(id);
  }
  @UseGuards(JwtAuthGuard)
  @Post('/addMovie')
  async addMovie(
    @Body()
    movie: {
      title: string;
      description: string;
      premiere: string;
      end: string;
      id: string;
    },
  ) {
    return this.CinemaService.addMovie(movie);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/updateMovie')
  async updateMovie(
    @Body()
    movie: {
      title: string;
      description: string;
      premiere: string;
      end: string;
      id: string;
    },
  ) {
    return this.CinemaService.updateMovie(movie);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/deleteMovie/:id')
  async deleteMovie(@Param() id: string) {
    return this.CinemaService.deleteMovie(id);
  }
}
