import {beforeEach, test} from '@jest/globals';
import request from 'supertest';
import app from '../src/app.js';
import Task from '../src/models/task.js';
import {
    taskOne,
    taskTwo,
    taskThree,
    setUpDatabase
} from './fixtures/customData';

beforeEach(setUpDatabase);

test('Should create task', async () => {
    const response = await request(app)
        .post('/tasks')
        .send(taskOne)
        .expect(200);
    const task = await Task.findById(response.body._id);
    expect(task).not.toBeNull();
});

test('Request get one task', async () => {
    const response = await request(app)
        .get(`/tasks/${taskTwo._id}`)
        .send()
        .expect(200);
});

test('Request get all tasks', async (done) => {
    const response = await request(app)
        .get('/tasks')
        .send()
        .expect(200);
    expect(response.body.length).toEqual(2);
    done();
});

test('Test delete task', async (done) => {
    const response = await request(app)
        .delete(`/tasks/${taskThree._id}`)
        .send()
        .expect(200);
    done();
});