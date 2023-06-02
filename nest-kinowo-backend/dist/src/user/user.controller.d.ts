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
    }>;
    getUserActiveReservations(id: string): Promise<{
        reservations: {
            id: string;
            movieId: string;
            title: string;
            date: Date;
            price: number;
            screeningNumber: number;
            seatNumber: number;
            watched: boolean;
        }[];
    }>;
    getUserComingReservations(id: string): Promise<{
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
        token: string;
    }, id: string): Promise<import(".prisma/client").User>;
    addOpinion(opinion: {
        userid: string;
        movieId: string;
        movieTitle: string;
        description: string;
        rate: string;
        token: string;
    }): Promise<import(".prisma/client").Opinion>;
}
