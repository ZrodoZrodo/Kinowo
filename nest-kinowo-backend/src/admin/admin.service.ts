import { Injectable } from '@nestjs/common';
import prisma from '../../prisma/prisma';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AdminService {
  async getUndeletedUsers() {
    return prisma.user.findMany({
      where: { deleted: false },
      select: {
        id: true,
        email: true,
        name: true,
        lastName: true,
      },
    });
  }

  async getDeletedUsers() {
    return prisma.user.findMany({
      where: { deleted: true },
      select: {
        id: true,
        email: true,
        name: true,
        lastName: true,
      },
    });
  }
  async deleteUser(id: string) {
    return prisma.user.update({
      where: { id },
      data: {
        deleted: true,
      },
    });
  }

  async undeleteUser(id: string) {
    return prisma.user.update({
      where: { id },
      data: {
        deleted: false,
      },
    });
  }

  async deleteCinema(id: string) {
    return prisma.cinemaAdmin.update({
      where: { id },
      data: {
        deleted: true,
      },
    });
  }

  async undeleteCinema(id: string) {
    return prisma.cinemaAdmin.update({
      where: { id },
      data: {
        deleted: false,
      },
    });
  }

  async getUndeletedCinemas() {
    return prisma.cinemaAdmin.findMany({
      where: {
        deleted: false,
      },
      select: {
        id: true,
        cinemaName: true,
        name: true,
        lastName: true,
      },
    });
  }

  async getDeletedCinemas() {
    return prisma.cinemaAdmin.findMany({
      where: {
        deleted: false,
      },
      select: {
        id: true,
        cinemaName: true,
        name: true,
        lastName: true,
      },
    });
  }

  async getCinemaNoDeletedMovies(id: string) {
    return prisma.cinemaAdmin.findFirst({
      where: { id },
      select: {
        movies: {
          where: { deleted: false },
          select: {
            id: true,
            title: true,
            description: true,
          },
        },
      },
    });
  }

  async getCinemaDeletedMovies(id: string) {
    return prisma.cinemaAdmin.findFirst({
      where: { id },
      select: {
        movies: {
          where: { deleted: true },
          select: {
            id: true,
            title: true,
            description: true,
          },
        },
      },
    });
  }

  async deleteCinemaMovie(id: string) {
    return prisma.movie.update({
      where: { id },
      data: {
        deleted: true,
      },
    });
  }

  async undeleteCinemaMovie(id: string) {
    return prisma.movie.update({
      where: { id },
      data: {
        deleted: false,
      },
    });
  }

  async addCinema({
    name,
    lastName,
    cinemaName,
    password,
  }: {
    name: string;
    lastName: string;
    cinemaName: string;
    password: string;
  }) {
    password = await bcrypt.hash(password, 12);

    return prisma.cinemaAdmin.create({
      data: {
        name,
        lastName,
        cinemaName,
        password,
      },
    });
  }

  async getUserUndeletedOpinions(id: string) {
    return prisma.user.findFirst({
      where: { id },
      select: {
        name: true,
        lastName: true,
        id: true,
        opinions: {
          where: { deleted: false },
          select: {
            id: true,
            movieTitle: true,
            description: true,
            rate: true,
          },
        },
      },
    });
  }

  async getUserDeletedOpinions(id: string) {
    return prisma.user.findFirst({
      where: { id },
      select: {
        name: true,
        lastName: true,
        id: true,
        opinions: {
          where: { deleted: true },
          select: {
            id: true,
            movieTitle: true,
            description: true,
            rate: true,
          },
        },
      },
    });
  }

  async deleteOpinion(id: string) {
    return prisma.opinion.update({
      where: { id },
      data: { deleted: true },
    });
  }
  async undeleteOpinion(id: string) {
    return prisma.opinion.update({
      where: { id },
      data: { deleted: false },
    });
  }
}
