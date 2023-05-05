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

  async login({
    cinemaName,
    password,
  }: {
    cinemaName: string;
    password: string;
  }) {
    try {
      password = await bcrypt.hash(password, 12);
      const token = await bcrypt.hash(cinemaName + uuid.toString(), 12);

      const resp = await prisma.cinemaAdmin.findFirst({
        where: { cinemaName, password, deleted: false },
        select: {
          id: true,
          name: true,
          lastName: true,
        },
      });
      if (!resp) {
        return false;
      } else {
        await prisma.user.update({
          where: { id: resp.id },
          data: { token },
        });
        return { token, user: resp };
      }
    } catch (e) {
      return { error: e.code + ' ' + e.message };
    }
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
