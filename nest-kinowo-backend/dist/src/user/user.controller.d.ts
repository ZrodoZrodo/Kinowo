import { UserService } from './user.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { LoginUserDto } from '../../dto/loginUser.dto';
import { CreateReservationDto } from '../../dto/CreateReservationDto';
export declare class UserController {
    private UserService;
    constructor(UserService: UserService);
    getUser(id: string): Promise<{
        name: string;
        lastName: string;
        email: string;
        id: string;
    }>;
    getUserActiveReservations(id: string): Promise<{
        reservations: import(".prisma/client").Reservation[];
    }>;
    getUserComingReservations(id: string): Promise<{
        reservations: import(".prisma/client").Reservation[];
    }>;
    register(newUser: CreateUserDto): Promise<{
        status: number;
        message: string;
    }>;
    login(User: LoginUserDto): Promise<false | {
        token: string;
        user: {
            name: string;
            email: string;
            id: string;
        };
        error?: undefined;
    } | {
        error: string;
        token?: undefined;
        user?: undefined;
    }>;
    createReservation(Reservation: CreateReservationDto): Promise<import(".prisma/client").Reservation>;
    updateUser(user: {
        email: any;
        name: any;
        lastName: any;
    }, id: string): Promise<import(".prisma/client").User>;
    addOpinion(opinion: any): Promise<import(".prisma/client").Opinion>;
}
