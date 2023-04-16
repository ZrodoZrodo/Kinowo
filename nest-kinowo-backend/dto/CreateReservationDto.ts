export class CreateReservationDto{
    userId: string;
    movieId: string;
    title: string;
    date: Date;
    price: number;
    screeningNumber: number;
    seatNumber: number;
}