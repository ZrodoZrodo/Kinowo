import { UserService } from './user.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { CreateReservationDto } from '../../dto/CreateReservationDto';
export declare class UserController {
    private UserService;
    constructor(UserService: UserService);
    getUser(id: {
        id: string;
    }): Promise<{
        id: string;
        deleted: boolean;
        email: string;
        name: string;
        lastName: string;
    }>;
    getMoviesHistory(id: {
        id: string;
    }): Promise<{
        reservations: {
            title: string;
            movieId: string;
            date: string;
            price: number;
        }[];
    }>;
    getUserActiveReservations(id: {
        id: string;
    }): Promise<{
        reservations: {
            id: string;
            title: string;
            movieId: string;
            date: string;
            price: number;
            seatNumber: number[];
            watched: boolean;
        }[];
    }>;
    getUserComingReservations(id: {
        id: string;
    }): Promise<{
        reservations: import(".prisma/client").Reservation[];
    }>;
    register(newUser: CreateUserDto): Promise<{
        status: number;
        message: string;
    }>;
    createReservation(Reservation: CreateReservationDto): Promise<import(".prisma/client").Reservation | {
        status: boolean;
        message: string;
    }>;
    updateUser(user: {
        email: string;
        name: string;
        lastName: string;
    }, id: {
        id: string;
    }): Promise<{
        email: string;
        name: string;
        lastName: string;
    }>;
    addOpinion(opinion: {
        userid: string;
        movieId: string;
        movieTitle: string;
        description: string;
        rate: number;
        token: string;
    }): Promise<import(".prisma/client").Opinion>;
}
