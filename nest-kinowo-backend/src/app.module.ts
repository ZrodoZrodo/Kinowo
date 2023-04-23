import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CinemaController } from './cinema/cinema.controller';
import { CinemaModule } from './cinema/cinema.module';
import { AdminModule } from './admin/admin.module';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

@Module({
  imports: [UserModule, CinemaModule, AdminModule],
  controllers: [AppController, CinemaController],
  providers: [AppService],
})
export class AppModule {}
