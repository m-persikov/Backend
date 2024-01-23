import { Schema, model } from 'mongoose';

const heroSchema = Schema({
  name: { type: String, required: true },
  // heroId: { type: Number ,  default: 0},
  heroId: { type: String },
  description: { type: String },
  side: { type: String, required: true},

}, { timestamps: true });

export default model('Hero', heroSchema);