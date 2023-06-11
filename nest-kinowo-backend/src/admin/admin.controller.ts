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
  @Get('/getUsers')
  async getUndeletedUsers() {
    return this.AdminService.getUsers();
  }

  //działa
  @Delete('/deleteUser/:id')
  async deleteUser(@Param() { id }: { id: string }) {
    return await this.AdminService.deleteUser(id);
  }
  //działa
  @Get('/undeleteUser/:id')
  async undeleteUser(@Param() { id }: { id: string }) {
    return this.AdminService.undeleteUser(id);
  }
  //działa
  @Get('/getUserUndeletedOpinions/:id')
  async getUserOpinions(@Param() { id }: { id: string }) {
    return this.AdminService.getUserOpinions(id);
  }

  @Delete('/deleteOpinion/:id')
  async deleteOpinion(@Body() { id }: { id: string }) {
    return this.AdminService.deleteOpinion(id);
  }

  @Post('/undeleteOpinion/:id')
  async undeleteOpinion(@Body() { id }: { id: string }) {
    return this.AdminService.undeleteOpinion(id);
  }
  //cinema

  //działa
  @Get('/getCinemas')
  async getCinemas() {
    return this.AdminService.getCinemas();
  }

  //działa
  @Delete('/deleteCinema/:id')
  async deleteCinema(@Param() { id }: { id: string }) {
    return this.AdminService.deleteCinema(id);
  }
  //działa
  @Get('/undeleteCinema/:id')
  async undeleteCinema(@Param() { id }: { id: string }) {
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

  @Post('/addAdmin')
  async addAdmin(
    @Body()
    data: {
      name: string;
      lastName: string;
      password: string;
      email: string;
    },
  ) {
    return this.AdminService.addAdmin(data);
  }
}
