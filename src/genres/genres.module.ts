import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GenresController } from './genre.controller';
import { GenresService } from './genre.service';
import { GenreSchema } from './genre.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Genre', schema: GenreSchema }]),
  ],
  controllers: [GenresController],
  providers: [GenresService],
})
export class GenresModule {}
