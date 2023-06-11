import { CreateUserDto } from '../../dto/create-user.dto';
import { CreateReservationDto } from '../../dto/CreateReservationDto';
export declare class UserService {
    findOne(username: string): Promise<any>;
    register({ name, lastName, email, password, }: CreateUserDto): Promise<{
        status: number;
        message: string;
    }>;
    getUser(id: string): Promise<{
        name: string;
        lastName: string;
        email: string;
        id: string;
        deleted: boolean;
        opinions: import(".prisma/client").Opinion[];
    }>;
    getUserActiveReservations(id: string): Promise<{
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
    getUserComingReservations(id: string): Promise<{
        reservations: {
            userId: string;
            movieId: string;
            title: string;
            date: string;
            price: number;
            seatNumber: number[];
        }[];
    }>;
    createReservation({ userId, movieId, title, date, price, screeningNumber, seatNumber, }: CreateReservationDto): Promise<import(".prisma/client").Reservation | {
        status: boolean;
        message: string;
    }>;
    updateUser(email: string, name: string, lastName: string, id: string): Promise<{
        name: string;
        lastName: string;
        email: string;
        id: string;
    }>;
    getMoviesHistory(id: string): Promise<{
        reservations: {
            movieId: string;
            title: string;
            date: string;
            price: number;
            seatNumber: number[];
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
