const express = require('express')
const { addFriend } = require('../controllers/friends/addFriend')
const { getAllUsers } = require('../controllers/friends/getAllUsers')
const { getFriends } = require('../controllers/friends/getFriends')
const { getFriendsTodos } = require('../controllers/friends/getFriendsTodos')
const { authMiddleware } = require('../middlewares/authMiddleware')
const friendRouter = express.Router()

friendRouter.use(authMiddleware)

friendRouter.get('/', getAllUsers)
friendRouter.get('/display', getFriends)
friendRouter.post('/todos', getFriendsTodos)
friendRouter.post('/', addFriend)


exports.friendRouter = friendRouter