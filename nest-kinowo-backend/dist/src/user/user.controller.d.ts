import { UserService } from './user.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { CreateReservationDto } from '../../dto/CreateReservationDto';
export declare class UserController {
    private UserService;
    constructor(UserService: UserService);
    getUser(id: {
        id: string;
    }): Promise<{
        name: string;
        lastName: string;
        email: string;
        id: string;
        deleted: boolean;
        opinions: import(".prisma/client").Opinion[];
    }>;
    getMoviesHistory(id: {
        id: string;
    }): Promise<{
        reservations: {
            movieId: string;
            title: string;
            date: string;
            price: number;
            seatNumber: number[];
        }[];
    }>;
    getUserActiveReservations(id: {
        id: string;
    }): Promise<{
        reservations: {
            id: string;
            movieId: string;
            title: string;
            date: string;
            price: number;
            seatNumber: number[];
            watched: boolean;
        }[];
    }>;
    getUserOpinions(id: {
        id: string;
    }): Promise<{
        opinions: import(".prisma/client").Opinion[];
    }>;
    getUserComingReservations(id: {
        id: string;
    }): Promise<{
        reservations: {
            userId: string;
            movieId: string;
            title: string;
            date: string;
            price: number;
            seatNumber: number[];
        }[];
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
        name: string;
        lastName: string;
        email: string;
        id: string;
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
