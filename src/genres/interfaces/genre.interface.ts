import { Document } from 'mongoose';

export interface Genre extends Document {
  name: string;
}
