import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

import { AdminModule } from './admin/admin.module';
import * as dotenv from 'dotenv';
import { CinemaModule } from './cinema/cinema.module';
import { AuthModule } from './auth/auth.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

dotenv.config();

@Module({
  imports: [UserModule, AdminModule, CinemaModule, AuthModule, CloudinaryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
