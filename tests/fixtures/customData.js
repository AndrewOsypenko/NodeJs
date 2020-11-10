import mongoose from 'mongoose';
import Task from '../../src/models/task.js';

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    title: 'First task',
    description: 'First task',
    completed: false
};

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    title: 'Second task',
    description: 'Second task',
    completed: true
};

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    title: 'Third task',
    description: 'Third task',
    completed: true
};

const setUpDatabase = async () => {
    await Task.deleteMany();
    await new Task(taskTwo).save();
    await new Task(taskThree).save();
};

export {
    taskOne,
    taskTwo,
    taskThree,
    setUpDatabase
};