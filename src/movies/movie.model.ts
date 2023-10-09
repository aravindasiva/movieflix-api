import { Schema, Document } from 'mongoose';

export interface Movie extends Document {
  title: string;
  description: string;
  releaseDate: Date;
  genre: string[];
}

export const MovieSchema = new Schema<Movie>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  genre: [{ type: String, required: true }],
});
