import * as mongoose from 'mongoose';

export const GenreSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

export interface Genre extends mongoose.Document {
  name: string;
}
