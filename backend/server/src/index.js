const express = require('express');
const server = express();
const cors = require('cors')
const { authRouter } = require('./routes/authRouter');
const { todoRouter } = require('./routes/todoRouter');
require('dotenv').config()
const cookieParser = require('cookie-parser');
const { friendRouter } = require('./routes/friendRouter');
server.use(express.json());
server.use(cookieParser());
server.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

server.use('/auth', authRouter)
server.use('/todo', todoRouter)
server.use('/friends', friendRouter)

server.listen(5050)