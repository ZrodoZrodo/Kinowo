import { Injectable } from '@nestjs/common';
import prisma from '../../prisma/prisma';
import { CreateUserDto } from '../../dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from '../../dto/loginUser.dto';
import { CreateReservationDto } from '../../dto/CreateReservationDto';
import { Valid } from '../../validation/validation';
import { v4 as uuid } from 'uuid';

//toDo dodać sprawdzanie czy użytkownik nie jest usunięty
@Injectable()
export class UserService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<any> {
    return await prisma.user.findFirst({
      where: { email: username },
    });
  }

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
    return await prisma.reservation.create({
      data: {
        movieId,
        title,
        date,
        price,
        movieScreeningId: screeningNumber,
        seatNumber,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }
  async updateUser(email: string, name: string, lastName: string, id: string) {
    return prisma.user.update({
      where: { id },
      data: { email, name, lastName },
    });
  }

  async getMoviesHistory(id: string) {
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
    token: string;
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
}
