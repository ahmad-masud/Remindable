const express = require('express')
const router = express.Router()
const { 
    getReminders,
    getReminder,
    createReminder,
    deleteReminder,
    updateReminder
} = require('../controllers/reminderController')

router.get('/', getReminders)

router.get('/:id', getReminder)

router.post('/create', createReminder)

router.delete('/delete/:id', deleteReminder)

router.patch('/update/:id', updateReminder)

module.exports = router