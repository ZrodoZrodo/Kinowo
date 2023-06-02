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
