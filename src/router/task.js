import { Router } from 'express';
import Task from '../models/task.js';
const router = Router();

router.post('/tasks', (req, res, next) => {
    const todo = new Task(req.body);
    todo.save().then(() => {
        res.send(todo);
    }).catch((e) => {
        next(e);
    });
});

router.get('/tasks', (req, res, next) => {
    Task.find({}).then((users) => {
        res.send(users);
    }).catch((e) => {
        next(e);
    });
});

router.get('/tasks/:id', (req, res, next) => {
    Task.findById({_id: req.params.id}, (err, doc) => {
        if (err) {
            next(err);
        }
        res.send(doc);
    });
});

router.patch('/tasks/:id', (req, res, next) => {
    Task.findOneAndUpdate({_id: req.params.id}, req.body,(err, doc) => {
        if (err) {
            next(err);
        }
        res.send(doc);
    });
});

router.delete('/tasks/:id', async (req, res, next) => {
    try {
        const task = await Task.findOneAndDelete({_id: req.params.id});
        if (!task) {
            next(task);
        }
        res.send(task);
    } catch (e) {
        next(e);
    }
});

export default router;