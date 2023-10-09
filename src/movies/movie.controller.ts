import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { MoviesService } from './movie.service';
import { CreateMovieDto, UpdateMovieDto } from './dto/movie.dto';
import { Movie } from './interfaces/movie.interface';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async findAll() {
    return this.moviesService.findAll();
  }

  @Post()
  async create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.moviesService.remove(id);
  }

  @Get('search')
  async searchMovies(@Query() queryParams: { title?: string; genre?: string }): Promise<Movie[]> {
    return this.moviesService.searchMovies(queryParams);
  }
}
