import { IsString, IsDate } from "class-validator";

export class CreateMovieDto {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsDate()
    releaseDate: Date;

    genre: string[];
}

export class UpdateMovieDto {
    title?: string;
    description?: string;
    releaseDate?: Date;
    genre?: string[];
}
