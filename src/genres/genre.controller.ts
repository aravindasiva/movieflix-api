import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { GenresService } from './genre.service';
import { CreateGenreDto } from './dto/genre.dto';

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Get()
  async findAll() {
    return this.genresService.findAll();
  }

  @Post()
  async create(@Body() createGenreDto: CreateGenreDto) {
    return this.genresService.create(createGenreDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.genresService.remove(id);
  }
}
