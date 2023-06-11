import { Injectable } from '@nestjs/common';
import prisma from '../../prisma/prisma';
import { CreateUserDto } from '../../dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from '../../dto/loginUser.dto';
import { CreateReservationDto } from '../../dto/CreateReservationDto';
import { Valid } from '../../validation/validation';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UserService {
  //działa
  async findOne(username: string): Promise<any> {
    const data = username.split(':');
    if (data[1] == 'user') {
      return await prisma.user.findFirst({
        where: { email: data[0], deleted: false },
      });
    }
    if (data[1] == 'cinemaAdmin') {
      return await prisma.cinemaAdmin.findFirst({
        where: { cinemaName: data[0], deleted: false },
      });
    }
    if (data[1] == 'admin') {
      return await prisma.admin.findFirst({
        where: { email: data[0] },
      });
    }
  }

  //działa
  async register({
    name,
    lastName,
    email,
    password,
  }: CreateUserDto): Promise<{ status: number; message: string }> {
    if (name && lastName && email && password) {
      if (
        !(
          Valid({ name }) &&
          Valid({ lastName }) &&
          Valid({ email }) &&
          Valid({ password })
        )
      ) {
        console.log(Valid({ lastName }));
        return { status: 400, message: 'Bad Data' };
      }
      try {
        password = await bcrypt.hash(password, 2);
        await prisma.user.create({
          data: {
            email,
            name,
            password,
            lastName,
          },
        });
        return { status: 201, message: 'Created' };
      } catch (e) {
        return e.code == 'P2002'
          ? { status: 409, message: 'This email already exist' }
          : e.message;
      }
    } else {
      return { status: 400, message: 'check your JSON' };
    }
  }

  //działa
  async getUser(id: string) {
    try {
      return await prisma.user.findFirst({
        where: {
          id: id,
        },
        select: {
          id: true,
          email: true,
          lastName: true,
          deleted: true,
          name: true,
          opinions: true,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  async getUserActiveReservations(id: string) {
    return await prisma.user.findFirst({
      where: { id },
      select: {
        reservations: {
          select: {
            id: true,
            movieId: true,
            title: true,
            date: true,
            price: true,
            watched: true,
            seatNumber: true,
          },
        },
      },
    });
  }

  async getUserComingReservations(id: string) {
    return await prisma.user.findFirst({
      where: { id },
      select: {
        reservations: {
          where: { watched: false },
        },
      },
    });
  }

  async createReservation({
    userId,
    movieId,
    title,
    date,
    price,
    screeningNumber,
    seatNumber,
  }: CreateReservationDto) {
    console.log(seatNumber);

    const array = await prisma.movieScreening.findFirst({
      where: { id: screeningNumber },
      select: {
        reservations: true,
      },
    });

    let free = true;

    array.reservations.forEach((res) => {
      if (seatNumber.includes(res)) {
        free = false;
      }
    });

    if (free) {
      await prisma.movieScreening.update({
        where: { id: screeningNumber },
        data: {
          reservations: {
            push: seatNumber,
          },
        },
      });

      return await prisma.reservation.create({
        data: {
          movieId,
          title,
          date,
          price: Number(price),
          movieScreening: {
            connect: {
              id: screeningNumber,
            },
          },
          seatNumber,
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
    } else {
      return { status: false, message: 'one or more this seats is occuped' };
    }
  }

  async updateUser(email: string, name: string, lastName: string, id: string) {
    return prisma.user.update({
      where: { id },
      data: { email, name, lastName },
      select: {
        email: true,
        name: true,
        lastName: true,
        id: true,
      },
    });
  }

  async getMoviesHistory(id: string) {
    console.log(id);
    return prisma.user.findFirst({
      where: { id },
      select: {
        reservations: {
          where: { watched: true },
          select: {
            movieId: true,
            title: true,
            date: true,
            price: true,
            seatNumber: true,
          },
        },
      },
    });
  }

  async addOpinion({
    userid,
    movieId,
    movieTitle,
    description,
    rate,
  }: {
    userid: string;
    movieId: string;
    movieTitle: string;
    description: string;
    rate: number;
  }) {
    return prisma.opinion.create({
      data: {
        movieTitle,
        description,
        rate,
        user: {
          connect: {
            id: userid,
          },
        },
        movie: {
          connect: {
            id: movieId,
          },
        },
      },
    });
  }

  async getUserOpinions(id: string) {
    return prisma.user.findFirst({
      where: { id },
      select: {
        opinions: {
          where: { deleted: false },
        },
      },
    });
  }
}
