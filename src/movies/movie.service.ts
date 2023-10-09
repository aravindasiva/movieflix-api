import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from './interfaces/movie.interface';
import { CreateMovieDto, UpdateMovieDto } from './dto/movie.dto';

@Injectable()
export class MoviesService {
    constructor(@InjectModel('Movie') private readonly movieModel: Model<Movie>) { }

    async findAll(): Promise<Movie[]> {
        return this.movieModel.find().exec();
    }

    async create(createMovieDto: CreateMovieDto): Promise<Movie> {
        const createdMovie = new this.movieModel(createMovieDto);
        return createdMovie.save();
    }

    async update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
        const updatedMovie = await this.movieModel
            .findByIdAndUpdate(id, updateMovieDto, { new: true })
            .exec();

        if (!updatedMovie) {
            throw new NotFoundException(`Movie with ID ${id} not found.`);
        }

        return updatedMovie;
    }

    async remove(id: string): Promise<Movie> {
        const deletedMovie = await this.movieModel.findByIdAndRemove(id).exec();

        if (!deletedMovie) {
            throw new NotFoundException(`Movie with ID ${id} not found.`);
        }

        return deletedMovie;
    }

    async searchMovies(queryParams: { title?: string; genre?: string }): Promise<Movie[]> {

        const filter: any = {};
        if (queryParams.title) {
            filter.title = { $regex: queryParams.title, $options: 'i' };
        }
        if (queryParams.genre) {
            filter.genre = { $in: [queryParams.genre] };
        }

        const movies = await this.movieModel.find(filter).exec();

        return movies;
    }
}
