export class CreateReservationDto {
  token: string;
  userId: string;
  movieId: string;
  title: string;
  date: Date;
  price: number;
  screeningNumber: number;
  seatNumber: number;
}
