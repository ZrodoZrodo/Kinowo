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
let UserService = class UserService {
    async register({ name, lastName, email, password }) {
        try {
            password = await bcrypt.hash(password, process.env.SALT);
            console.log(password);
            await prisma_1.default.user.create({
                data: {
                    email,
                    name,
                    password,
                    lastName,
                }
            });
            return { status: 201, message: "Created" };
        }
        catch (e) {
            return e.code == 'P2002' ? { status: 409, message: "This email already exist" } : e.message;
        }
    }
    async login({ email, password }) {
        try {
            password = await bcrypt.hash(password, process.env.SALT);
            return await prisma_1.default.user.findFirst({
                where: { email, password },
                select: {
                    id: true,
                    name: true,
                    email: true,
                }
            });
        }
        catch (e) {
            console.log(e.code + " " + e.message);
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map