require('dotenv').config()
const express = require('express')
const app = express()
const reminderRoutes = require('./routes/reminders')
const userRoutes = require('./routes/user')
const mongoose = require('mongoose')
const port = 4000

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use('/', (req, res) => {
    res.send('Remindable API')
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