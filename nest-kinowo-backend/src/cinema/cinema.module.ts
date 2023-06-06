import { Module } from '@nestjs/common';
import { CinemaController } from './cinema.controller';
import { CinemaService } from './cinema.service';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Module({
  controllers: [CinemaController],
  providers: [CinemaService, CloudinaryService],
})
export class CinemaModule {}
