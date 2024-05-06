const Reminder = require('../models/Reminder')
const mongoose = require('mongoose')

const getReminders = async (req, res) => {
    const user_id = req.user._id

    try {
        const reminders = await Reminder.find({ user_id }).sort({createdAt: -1})
        res.status(200).json(reminders)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

const getReminder = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Invalid ID'})
    }
    const reminder = await Reminder.findById(id)
    if (!reminder) {
        return res.status(404).json({error: 'Reminder not found'})
    }
    res.status(200).json(reminder)
}

const createReminder = async (req, res) => {
    const { title, description, date } = req.body

    if (!title || !date) {
        return res.status(400).json({error: 'Please provide a title and date'})
    }

    try {
        const user_id = req.user._id
        const reminder = await Reminder.create({ title, description, date, user_id })
        res.status(200).json(reminder)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

const deleteReminder = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Invalid ID'})
    }

    const reminder = await Reminder.findByIdAndDelete(id)

    if (!reminder) {
        return res.status(404).json({error: 'Reminder not found'})
    }
    
    res.status(200).json({message: 'Reminder deleted'})
}

const updateReminder = async (req, res) => {
    const { id } = req.params
    const { title, description, date } = req.body
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Invalid ID'})
    }

    const reminder = await Reminder.findByIdAndUpdate(id, { title, description, date }, { new: true })

    if (!reminder) {
        return res.status(404).json({error: 'Reminder not found'})
    }
    
    res.status(200).json(reminder)
}

module.exports = { 
    getReminders,
    getReminder,
    createReminder,
    deleteReminder,
    updateReminder
}