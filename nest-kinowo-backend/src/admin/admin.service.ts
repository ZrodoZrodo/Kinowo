import { Injectable } from '@nestjs/common';
import prisma from '../../prisma/prisma';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AdminService {
  async getUsers() {
    return prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        lastName: true,
        deleted: true,
      },
    });
  }

  async deleteUser(id: string) {
    console.log(id);
    return prisma.user.update({
      where: { id },
      data: {
        deleted: true,
      },
      select: {
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
      select: {
        deleted: true,
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

  async getCinemas() {
    return prisma.cinemaAdmin.findMany({
      select: {
        deleted: true,
        id: true,
        cinemaName: true,
        name: true,
        lastName: true,
      },
    });
  }

  async getCinemaMovies(id: string) {
    return prisma.cinemaAdmin.findFirst({
      where: { id },
      select: {
        movies: {
          select: {
            id: true,
            title: true,
            description: true,
            images: true,
            deleted: true,
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

  async getUserOpinions(id: string) {
    return prisma.user.findFirst({
      where: { id },
      select: {
        name: true,
        lastName: true,
        id: true,
        opinions: {
          select: {
            id: true,
            movieTitle: true,
            description: true,
            rate: true,
            deleted: true,
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

  async addAdmin({
    name,
    lastName,
    password,
    email,
  }: {
    name: string;
    lastName: string;
    password: string;
    email: string;
  }) {
    password = await bcrypt.hash(password, 12);
    return prisma.admin.create({
      data: {
        name,
        lastName,
        password,
        email,
      },
    });
  }
}
