"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../prisma/prisma");
const bcrypt = require("bcrypt");
const validation_1 = require("../../validation/validation");
let UserService = class UserService {
    async findOne(username) {
        return await prisma_1.default.user.findFirst({
            where: { email: username, deleted: false },
        });
    }
    async register({ name, lastName, email, password, }) {
        if (name && lastName && email && password) {
            if (!((0, validation_1.Valid)({ name }) &&
                (0, validation_1.Valid)({ lastName }) &&
                (0, validation_1.Valid)({ email }) &&
                (0, validation_1.Valid)({ password }))) {
                console.log((0, validation_1.Valid)({ lastName }));
                return { status: 400, message: 'Bad Data' };
            }
            try {
                password = await bcrypt.hash(password, 2);
                await prisma_1.default.user.create({
                    data: {
                        email,
                        name,
                        password,
                        lastName,
                    },
                });
                return { status: 201, message: 'Created' };
            }
            catch (e) {
                return e.code == 'P2002'
                    ? { status: 409, message: 'This email already exist' }
                    : e.message;
            }
        }
        else {
            return { status: 400, message: 'check your JSON' };
        }
    }
    async getUser(id) {
        try {
            return await prisma_1.default.user.findFirst({
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
        }
        catch (e) {
            console.log(e);
        }
    }
    async getUserActiveReservations(id) {
        return await prisma_1.default.user.findFirst({
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
    async getUserComingReservations(id) {
        return await prisma_1.default.user.findFirst({
            where: { id },
            select: {
                reservations: {
                    where: { watched: false },
                },
            },
        });
    }
    async createReservation({ userId, movieId, title, date, price, screeningNumber, seatNumber, }) {
        console.log(seatNumber);
        return await prisma_1.default.reservation.create({
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
    async updateUser(email, name, lastName, id) {
        return prisma_1.default.user.update({
            where: { id },
            data: { email, name, lastName },
            select: {
                email: true,
                name: true,
                lastName: true,
            },
        });
    }
    async getMoviesHistory(id) {
        return prisma_1.default.user.findFirst({
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
    async addOpinion({ userid, movieId, movieTitle, description, rate, }) {
        return prisma_1.default.opinion.create({
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
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map