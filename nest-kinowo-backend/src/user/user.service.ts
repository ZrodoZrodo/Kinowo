import { Injectable } from '@nestjs/common';
import prisma from '../../prisma/prisma';
import { CreateUserDto } from '../../dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from '../../dto/loginUser.dto';
import { CreateReservationDto } from '../../dto/CreateReservationDto';
import { Valid } from '../../validation/validation';

@Injectable()
export class UserService {
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
      )
        return { status: 400, message: 'Bad Data' };
      try {
        password = await bcrypt.hash(password, 12);
        console.log(password);
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

  async login({ email, password }: LoginUserDto) {
    try {
      password = await bcrypt.hash(password, 12);
      return await prisma.user.findFirst({
        where: { email, password },
        select: {
          id: true,
          name: true,
          email: true,
        },
      });
    } catch (e) {
      console.log(e.code + ' ' + e.message);
    }
  }
  async getUser(id: string) {
    return await prisma.user.findFirst({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        lastName: true,
      },
    });
  }
  async getUserActiveReservations(id: string) {
    return await prisma.user.findFirst({
      where: { id },
      select: {
        reservations: {
          where: { watched: true },
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
        screeningNumber,
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
}
