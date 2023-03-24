const express = require('express')
const { addFriend } = require('../controllers/friends/addFriend')
const { getAllUsers } = require('../controllers/friends/getAllUsers')
const { getFriendsTodos } = require('../controllers/friends/getFriendsTodos')
const { authMiddleware } = require('../middlewares/authMiddleware')
const friendRouter = express.Router()

friendRouter.use(authMiddleware)

friendRouter.get('/', getAllUsers)
friendRouter.get('/todos', getFriendsTodos)
friendRouter.post('/', addFriend)


exports.friendRouter = friendRouter