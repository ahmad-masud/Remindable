require('dotenv').config()
const express = require('express')
const app = express()
const reminderRoutes = require('./routes/reminders')
const userRoutes = require('./routes/user')
const mongoose = require('mongoose')
const cors = require('cors')
const port = 4000

app.use(cors(
    {
        origin: 'https://remindable.vercel.app',
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
        optionsSuccessStatus: 200,
        preflightContinue: true
    }
))
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use('/api/reminders', reminderRoutes)
app.use('/api/users', userRoutes)

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB')
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    })
    .catch(err => {
        console.log('Error connecting to MongoDB', err.message)
    })

module.exports = app