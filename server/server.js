require('dotenv').config()
const express = require('express')
const app = express()
const reminderRoutes = require('./routes/reminders')
const mongoose = require('mongoose')

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use('/api/reminders', reminderRoutes)

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB')
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    })
    .catch(err => {
        console.log('Error connecting to MongoDB', err.message)
    })