import express from 'express';
import "./db/mongoose.js";
import  taskRouter from './router/task.js'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());
app.use(taskRouter);
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({error: err})
});
export default app;