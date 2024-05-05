const User = require('../models/User')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.TOKEN_SECRET, { expiresIn: '3d' })
}

const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.status(200).json({ email, token })
    } catch (error) {     
        res.status(400).json({ error: error.message })
    }
}

const registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body

    try {
        const user = await User.register(firstName, lastName, email, password)
        const token = createToken(user._id)
        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    loginUser,
    registerUser
}