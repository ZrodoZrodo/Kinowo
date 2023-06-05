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
        email: string;
        lastName: string;
        deleted: boolean;
        name: string;
    }>;
    getMoviesHistory(id: {
        id: string;
    }): Promise<{
        reservations: {
            movieId: string;
            title: string;
            date: string;
            price: number;
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
            watched: boolean;
            seatNumber: number[];
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
    createReservation(Reservation: CreateReservationDto): Promise<import(".prisma/client").Reservation>;
    updateUser(user: {
        email: string;
        name: string;
        lastName: string;
    }, id: {
        id: string;
    }): Promise<{
        email: string;
        lastName: string;
        name: string;
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
