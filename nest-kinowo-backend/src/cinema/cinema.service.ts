import { Injectable } from '@nestjs/common';
import prisma from '../../prisma/prisma';
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
}
