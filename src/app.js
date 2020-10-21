const express = require('express')
require('./db/mongoose')
const taskRouter = require('./router/task')

const app = express()

app.use(express.json())
app.use(taskRouter)

module.exports = app