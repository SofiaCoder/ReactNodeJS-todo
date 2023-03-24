const express = require('express');
const { deleteTodos } = require('../controllers/todos/deleteTodos');
const { getTodos } = require('../controllers/todos/getTodos');
const { patchTodos } = require('../controllers/todos/patchTodos');
const { patchTodoValue } = require('../controllers/todos/patchTodoValue');
const { postTodos } = require('../controllers/todos/postTodos');
const { authMiddleware } = require('../middlewares/authMiddleware');
const todoRouter = express.Router();

todoRouter.use(authMiddleware)

todoRouter.post('/', postTodos)
todoRouter.get('/', getTodos)
todoRouter.patch('/', patchTodos)
todoRouter.delete('/', deleteTodos)
todoRouter.patch('/value', patchTodoValue)



exports.todoRouter = todoRouter