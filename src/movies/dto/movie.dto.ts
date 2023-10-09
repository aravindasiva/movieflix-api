export class CreateMovieDto {
    title: string;
    description: string;
    releaseDate: Date;
    genre: string[];
  }
  
  export class UpdateMovieDto {
    title?: string;
    description?: string;
    releaseDate?: Date;
    genre?: string[];
  }
  