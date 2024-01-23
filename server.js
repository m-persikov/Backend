import express from 'express';
// import mongoose from 'mongoose';
import cors from "cors";
const server = express();

// import heroRouter from './routers/heroRouter.js';
import userRouter from './routers/userRouter.js';

const PORT = 4000;

server.use(express.json());
server.use(cors());
// server.use(heroRouter);
server.use(userRouter);

server.listen(PORT, () => console.log(`Server running on ${PORT}`));

// mongoose.connect('mongodb://127.0.0.1:27017/React')
//   .then(() => console.log('Connected to mongoDB'))
//   .catch((error) => console.log(error));;