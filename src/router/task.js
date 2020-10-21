const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

router.post('/', async (req, res) => {
    const todo = new Task(req.body)
    todo.save().then(() => {
        res.send(todo)
    }).catch((e) => {
        res.send(e)
    })
})

router.get('/', async (req, res) => {
    Task.find({}).then((users) => {
        res.send(users)
        }).catch((e) => {
        res.status(400).send(e)
    })
})

router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id })

        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title', 'description', 'completed']
    const isValidOper = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOper) {
        return  res.status(401).send({error: 'Invalid updates!'})
    }
    try {
        const task = await Task.findOne({ _id: req.params.id})
        if (!task) {
            return res.status(404).send(task)
        }
        updates.forEach((update) => task[update] = req.body[update])
        await task.save()
        res.send(task)
    } catch (e) {
        res.status(400).send(e)

    }
})

router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id})
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router