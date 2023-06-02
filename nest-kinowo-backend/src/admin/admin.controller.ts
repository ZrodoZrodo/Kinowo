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
  @Get('/getUndeletedUsers')
  async getUndeletedUsers() {
    return this.AdminService.getUndeletedUsers();
  }
  @Get('/getDeletedUsers')
  async getUDeletedUsers() {
    return this.AdminService.getDeletedUsers();
  }
  @Delete('/deleteUser')
  async deleteUser(@Body() id: string) {
    return this.AdminService.deleteUser(id);
  }
  @Post('/undeleteUser')
  async undeleteUser(@Body() id: string) {
    return this.AdminService.undeleteUser(id);
  }
  @Get('/getUserUndeletedOpinions/:id')
  async getUserUndeletedOpinions(@Param() id: string) {
    return this.AdminService.getUserUndeletedOpinions(id);
  }
  @Get('/getUserDeletedOpinions/:id')
  async getUserDeletedOpinions(@Param() id: string) {
    return this.AdminService.getUserDeletedOpinions(id);
  }
  @Delete('/deleteOpinion')
  async deleteOpinion(@Body() id: string) {
    return this.AdminService.deleteOpinion(id);
  }
  @Post('/undeleteOpinion')
  async undeleteOpinion(@Body() id: string) {
    return this.AdminService.undeleteOpinion(id);
  }
  //cinema
  @Get('/getUndeletedCinemas')
  async getUndeletedCinemas() {
    return this.AdminService.getUndeletedCinemas();
  }
  @Get('/getDeletedCinemas')
  async getUDeletedCinemas() {
    return this.AdminService.getDeletedCinemas();
  }
  @Delete('/deleteCinema')
  async deleteCinema(@Body() id: string) {
    return this.AdminService.deleteCinema(id);
  }
  @Post('/undeleteCinema')
  async undeleteCinema(@Body() id: string) {
    return this.AdminService.undeleteCinema(id);
  }

  @Get('/getCinemaNoDeletedMovies/:id')
  async getCinemaNoDeletedMovies(@Param() id: string) {
    return this.AdminService.getCinemaNoDeletedMovies(id);
  }
  @Get('/getCinemaDeletedMovies/:id')
  async getCinemaDeletedMovies(@Param() id: string) {
    return this.AdminService.getCinemaDeletedMovies(id);
  }
  @Delete('/deleteCinemaMovie')
  async deleteCinemaMovie(@Body() id: string) {
    return this.AdminService.deleteCinemaMovie(id);
  }
  @Post('/undeleteCinemaMovie')
  async undeleteCinemaMovie(@Body() id: string) {
    return this.AdminService.undeleteCinemaMovie(id);
  }
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
