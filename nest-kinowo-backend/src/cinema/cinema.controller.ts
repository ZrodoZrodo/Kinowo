import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CinemaService } from './cinema.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateReservationDto } from '../../dto/CreateReservationDto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Controller('cinema')
export class CinemaController {
  constructor(
    @Inject(CinemaService) private CinemaService: CinemaService,
    @Inject(CloudinaryService) private CloudinaryService: CloudinaryService,
  ) {}

  //działa
  @Get('/getAll/:id')
  async getAll(@Param() { id }: { id: string }) {
    return this.CinemaService.getAll(id);
  }
  //działa
  @UseGuards(JwtAuthGuard)
  @Get('/getOne/:title')
  async getOne(@Param() { title }: { title: string }) {
    return this.CinemaService.getOne(title);
  }
  //działa
  @UseGuards(JwtAuthGuard)
  @Get('/getOneDetails/:id')
  async getOneDetails(@Param() { id }: { id: string }) {
    return this.CinemaService.getOneDetails(id);
  }
  //działa
  @UseGuards(JwtAuthGuard)
  @Get('/getMovies/:id')
  async getMovies(@Param() { id }: { id: string }) {
    return this.CinemaService.getMovies(id);
  }

  //działa
  @Post('/upload')
  @UseInterceptors(FilesInterceptor('files', 10))
  async uploadFile(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('premiere') premiere: string,
    @Body('end') end: string,
    @Body('id') id: string,
  ) {
    console.log(files, title, id);
    const array = [];
    for (const photo of files) {
      const { url } = await this.CloudinaryService.uploadFile(photo);
      array.push(url);
    }
    await console.log(array);
    await this.CinemaService.addMovie({
      title,
      description,
      premiere,
      end,
      id,
      images: array,
    });
  }

  //działa
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
  //działa
  @UseGuards(JwtAuthGuard)
  @Delete('/deleteMovie/:id')
  async deleteMovie(@Param() { id }: { id: string }) {
    return this.CinemaService.deleteMovie(id);
  }
}
