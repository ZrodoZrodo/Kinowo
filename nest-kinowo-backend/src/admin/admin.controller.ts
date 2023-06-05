import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(@Inject(AdminService) private AdminService: AdminService) {}

  //user

  //działa
  @Get('/getUndeletedUsers')
  async getUndeletedUsers() {
    return this.AdminService.getUndeletedUsers();
  }
  //działa
  @Get('/getDeletedUsers')
  async getUDeletedUsers() {
    return this.AdminService.getDeletedUsers();
  }
  //działa
  @Delete('/deleteUser')
  async deleteUser(@Body() { id }: { id: string }) {
    return this.AdminService.deleteUser(id);
  }
  //działa
  @Post('/undeleteUser')
  async undeleteUser(@Body() { id }: { id: string }) {
    return this.AdminService.undeleteUser(id);
  }
  //działa
  @Get('/getUserUndeletedOpinions/:id')
  async getUserUndeletedOpinions(@Param() { id }: { id: string }) {
    return this.AdminService.getUserUndeletedOpinions(id);
  }
  //działa
  @Get('/getUserDeletedOpinions/:id')
  async getUserDeletedOpinions(@Param() { id }: { id: string }) {
    return this.AdminService.getUserDeletedOpinions(id);
  }

  @Delete('/deleteOpinion')
  async deleteOpinion(@Body() { id }: { id: string }) {
    return this.AdminService.deleteOpinion(id);
  }

  @Post('/undeleteOpinion')
  async undeleteOpinion(@Body() { id }: { id: string }) {
    return this.AdminService.undeleteOpinion(id);
  }
  //cinema

  //działa
  @Get('/getUndeletedCinemas')
  async getUndeletedCinemas() {
    return this.AdminService.getUndeletedCinemas();
  }

  //działa
  @Get('/getDeletedCinemas')
  async getUDeletedCinemas() {
    return this.AdminService.getDeletedCinemas();
  }
  //działa
  @Delete('/deleteCinema')
  async deleteCinema(@Body() { id }: { id: string }) {
    return this.AdminService.deleteCinema(id);
  }
  //działa
  @Post('/undeleteCinema')
  async undeleteCinema(@Body() { id }: { id: string }) {
    return this.AdminService.undeleteCinema(id);
  }

  @Get('/getCinemaNoDeletedMovies/:id')
  async getCinemaNoDeletedMovies(@Param() { id }: { id: string }) {
    return this.AdminService.getCinemaNoDeletedMovies(id);
  }
  @Get('/getCinemaDeletedMovies/:id')
  async getCinemaDeletedMovies(@Param() { id }: { id: string }) {
    return this.AdminService.getCinemaDeletedMovies(id);
  }
  @Delete('/deleteCinemaMovie')
  async deleteCinemaMovie(@Body() { id }: { id: string }) {
    return this.AdminService.deleteCinemaMovie(id);
  }
  @Post('/undeleteCinemaMovie')
  async undeleteCinemaMovie(@Body() { id }: { id: string }) {
    return this.AdminService.undeleteCinemaMovie(id);
  }
  //działa
  @Post('/addCinema')
  async addCinema(
    @Body()
    data: {
      name: string;
      lastName: string;
      cinemaName: string;
      password: string;
    },
  ) {
    return this.AdminService.addCinema(data);
  }
}
