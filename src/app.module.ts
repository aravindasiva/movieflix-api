import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { GenresController } from './genres/genres.controller';

@Module({
  imports: [],
  controllers: [AppController, MoviesController, GenresController],
  providers: [AppService],
})
export class AppModule {}
