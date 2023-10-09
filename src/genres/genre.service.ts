import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Genre } from './interfaces/genre.interface';
import { CreateGenreDto } from './dto/genre.dto';

@Injectable()
export class GenresService {
  constructor(@InjectModel('Genre') private readonly genreModel: Model<Genre>) {}

  async findAll(): Promise<Genre[]> {
    return this.genreModel.find().exec();
  }

  async create(createGenreDto: CreateGenreDto): Promise<Genre> {
    const createdGenre = new this.genreModel(createGenreDto);
    return createdGenre.save();
  }

  async remove(id: string): Promise<Genre> {
    const deletedGenre = await this.genreModel.findByIdAndRemove(id).exec();

    if (!deletedGenre) {
      throw new NotFoundException(`Genre with ID ${id} not found.`);
    }

    return deletedGenre;
  }
}
