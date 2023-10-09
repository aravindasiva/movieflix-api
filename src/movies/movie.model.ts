import * as mongoose from 'mongoose';

export const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  genre: [{ type: String, required: true }],
});

export interface Movie extends mongoose.Document {
  title: string;
  description: string;
  releaseDate: Date;
  genre: string[];
}
