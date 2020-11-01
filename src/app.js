import express from 'express';
import cors from 'cors'
import './db/mongoose.js';
import  taskRouter from './router/task.js'
import  errorHandler from './middleware/errorHandler.js'

const app = express();
app.use(cors());
app.use(express.json());
app.use(taskRouter);
app.use(errorHandler);
export default app;