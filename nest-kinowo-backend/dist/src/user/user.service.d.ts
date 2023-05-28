import { CreateUserDto } from '../../dto/create-user.dto';
import { CreateReservationDto } from '../../dto/CreateReservationDto';
export declare class UserService {
    private readonly users;
    findOne(username: string): Promise<any>;
    register({ name, lastName, email, password, }: CreateUserDto): Promise<{
        status: number;
        message: string;
    }>;
    getUser(id: string): Promise<{
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
    createReservation({ userId, movieId, title, date, price, screeningNumber, seatNumber, token, }: CreateReservationDto): Promise<import(".prisma/client").Reservation>;
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
        token: string;
    }): Promise<import(".prisma/client").Opinion>;
}
