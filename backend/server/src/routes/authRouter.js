const express = require('express')
const { login } = require('../controllers/authentication/login')
const { register } = require('../controllers/authentication/register')
const authRouter = express.Router()

authRouter.post('/login', login)
authRouter.post('/register', register)

exports.authRouter = authRouter