import { Document } from 'mongoose';

export interface Movie extends Document {
  title: string;
  description: string;
  releaseDate: Date;
  genre: string[];
}
