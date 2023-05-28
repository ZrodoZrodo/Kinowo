import { Injectable } from '@nestjs/common';
import prisma from '../../prisma/prisma';
import * as bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
@Injectable()
export class CinemaService {
  async getAll() {
    return prisma.movie.findMany({
      select: {
        title: true,
        description: true,
        images: true,
        opinion: {
          where: { deleted: false },
          select: {
            description: true,
            rate: true,
            user: {
              select: {
                email: true,
                name: true,
                lastName: true,
              },
            },
          },
        },
      },
    });
  }


  async addMovie({ title, description, premiere, end, id }) {
    return prisma.movie.create({
      data: {
        title,
        description,
        premiere,
        end,
        cinemaAdmin: {
          connect: {
            id,
          },
        },
      },
    });
  }
  async deleteMovie(id) {
    return prisma.movie.delete({
      where: { id },
    });
  }
  async getMovies(id: string) {
    return prisma.cinemaAdmin.findFirst({
      where: { id },
      select: {
        movies: {
          where: { deleted: false },
          select: {
            id: true,
            title: true,
            description: true,
            images: true,
            opinion: true,
            premiere: true,
            end: true,
          },
        },
      },
    });
  }
}
