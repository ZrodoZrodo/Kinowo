import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

import { AdminModule } from './admin/admin.module';
import * as dotenv from 'dotenv';
import { CinemaModule } from './cinema/cinema.module'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

@Module({
  imports: [UserModule, AdminModule, CinemaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
