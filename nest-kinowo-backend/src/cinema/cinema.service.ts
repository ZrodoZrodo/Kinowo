import { Injectable } from '@nestjs/common';
import prisma from '../../prisma/prisma';

@Injectable()
export class CinemaService {
  async getAll(id: string) {
    return prisma.movie.findMany({
      where: { cinemaAdminId: id },
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

  async getOne(title: string) {
    return prisma.movie.findMany({
      where: {
        title: {
          contains: title,
        },
      },
      select: {
        id: true,
        title: true,
        description: true,
        images: true,
      },
    });
  }

  async getUserMovies() {
    return prisma.movie.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        images: true,
      },
    });
  }

  async getOneDetails(id: string) {
    return prisma.movie.findFirst({
      where: { id },
      select: {
        id: true,
        title: true,
        description: true,
        images: true,
        opinion: true,
        premiere: true,
        end: true,
        deleted: true,
        cinemaAdmin: {
          select: {
            cinemaName: true,
          },
        },
      },
    });
  }

  async addMovie({
    title,
    description,
    premiere,
    end,
    id,
    images,
  }: {
    title: string;
    description: string;
    premiere: string;
    end: string;
    id: string;
    images: string[];
  }) {
    return prisma.movie.create({
      data: {
        title,
        description,
        premiere,
        end,
        images,
        cinemaAdmin: {
          connect: {
            id,
          },
        },
      },
    });
  }

  async updateMovie({ title, description, premiere, end, id }) {
    return prisma.movie.update({
      where: { id },
      data: {
        title,
        description,
        premiere,
        end,
      },
    });
  }
  async deleteMovie(id) {
    return prisma.movie.update({
      where: { id },
      data: { deleted: true },
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

  async putMoviesIntoScreening({
    movieId,
    price,
    date,
    end,
    cinemaAdminId,
  }: {
    movieId: string;
    price: number;
    date: string;
    end: boolean;
    cinemaAdminId: string;
  }) {
    return prisma.movieScreening.create({
      data: {
        movie: {
          connect: {
            id: movieId,
          },
        },
        price,
        date,
        end,
        CinemaAdmin: {
          connect: {
            id: cinemaAdminId,
          },
        },
      },
    });
  }

  async getOccupiedSeats(id: string) {
    return prisma.movieScreening.findFirst({
      where: { id },
      select: {
        reservations: true,
        price: true,
      },
    });
  }

  async getMovieScreeningByDate(date: string) {
    return prisma.movieScreening.findMany({
      where: {
        date: {
          startsWith: date,
        },
      },
      select: {
        date: true,
        id: true,
        price: true,
        movie: {
          select: {
            title: true,
            description: true,
            images: true,
          },
        },
      },
    });
  }

  async getMovieScreeningHours(date: string, id: string) {
    return prisma.movieScreening.findMany({
      where: { date: { startsWith: date }, movieId: id },
      select: {
        date: true,
      },
    });
  }
}
