import { CreateUserDto } from '../../dto/create-user.dto';
import { LoginUserDto } from '../../dto/loginUser.dto';
import { CreateReservationDto } from '../../dto/CreateReservationDto';
export declare class UserService {
    register({ name, lastName, email, password, }: CreateUserDto): Promise<{
        status: number;
        message: string;
    }>;
    login({ email, password }: LoginUserDto): Promise<false | {
        token: string;
        user: {
            id: string;
            email: string;
            name: string;
        };
        error?: undefined;
    } | {
        error: string;
        token?: undefined;
        user?: undefined;
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
    getMoviesHistory(id: string): Promise<{
        reservations: {
            movieId: string;
            title: string;
            date: Date;
            price: number;
        }[];
    }>;
    addOpinion({ userid, movieId, movieTitle, description, rate, }: {
        userid: string;
        movieId: string;
        movieTitle: string;
        description: string;
        rate: string;
    }): Promise<import(".prisma/client").Opinion>;
}
