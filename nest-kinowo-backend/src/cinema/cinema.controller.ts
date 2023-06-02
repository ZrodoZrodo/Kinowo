import { Controller, Get, Inject } from '@nestjs/common';
import { CinemaService } from './cinema.service';

@Controller('cinema')
export class CinemaController {
  constructor(@Inject(CinemaService) private CinemaService: CinemaService) {}
  @Get('/getAll')
  async getAll() {
    return this.CinemaService.getAll();
  }

  @Get('/getAll')
  async getAll() {
    return this.CinemaService.getAll();
  }
}
