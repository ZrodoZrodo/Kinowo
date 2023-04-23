import { CreateUserDto } from '../../dto/create-user.dto';
import { LoginUserDto } from '../../dto/loginUser.dto';
import { CreateReservationDto } from '../../dto/CreateReservationDto';
export declare class UserService {
    register({ name, lastName, email, password, }: CreateUserDto): Promise<{
        status: number;
        message: string;
    }>;
    login({ email, password }: LoginUserDto): Promise<{
        id: string;
        email: string;
        name: string;
    }>;
    getUser(id: string): Promise<{
        id: string;
        email: string;
        name: string;
        lastName: string;
    }>;
    getUserActiveReservations(id: string): Promise<{
        reservations: import(".prisma/client").Reservation[];
    }>;
    getUserComingReservations(id: string): Promise<{
        reservations: import(".prisma/client").Reservation[];
    }>;
    createReservation({ userId, movieId, title, date, price, screeningNumber, seatNumber, }: CreateReservationDto): Promise<import(".prisma/client").Reservation>;
    updateUser(email: string, name: string, lastName: string, id: string): Promise<import(".prisma/client").User>;
}
