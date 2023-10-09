import { Schema, Document } from 'mongoose';

export interface Genre extends Document {
  name: string;
}

export const GenreSchema = new Schema<Genre>({
  name: { type: String, required: true },
});