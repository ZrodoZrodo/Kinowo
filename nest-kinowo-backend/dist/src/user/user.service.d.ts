import { CreateUserDto } from '../../dto/create-user.dto';
import { CreateReservationDto } from '../../dto/CreateReservationDto';
export declare class UserService {
    findOne(username: string): Promise<any>;
    register({ name, lastName, email, password, }: CreateUserDto): Promise<{
        status: number;
        message: string;
    }>;
    getUser(id: string): Promise<{
        opinions: import(".prisma/client").Opinion[];
        id: string;
        deleted: boolean;
        email: string;
        name: string;
        lastName: string;
    }>;
    getUserActiveReservations(id: string): Promise<{
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
    getUserComingReservations(id: string): Promise<{
        reservations: import(".prisma/client").Reservation[];
    }>;
    createReservation({ userId, movieId, title, date, price, screeningNumber, seatNumber, }: CreateReservationDto): Promise<import(".prisma/client").Reservation | {
        status: boolean;
        message: string;
    }>;
    updateUser(email: string, name: string, lastName: string, id: string): Promise<{
        email: string;
        name: string;
        lastName: string;
    }>;
    getMoviesHistory(id: string): Promise<{
        reservations: {
            title: string;
            movieId: string;
            date: string;
            price: number;
        }[];
    }>;
    addOpinion({ userid, movieId, movieTitle, description, rate, }: {
        userid: string;
        movieId: string;
        movieTitle: string;
        description: string;
        rate: number;
    }): Promise<import(".prisma/client").Opinion>;
    getUserOpinions(id: string): Promise<{
        opinions: import(".prisma/client").Opinion[];
    }>;
}
