export class CreateReservationDto {
  token: string;
  userId: string;
  movieId: string;
  title: string;
  date: string;
  price: number;
  screeningNumber: string;
  seatNumber: number[];
}
