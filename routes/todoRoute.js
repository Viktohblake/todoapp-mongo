const express = require('express');

const router = express.Router();
const controller = require('../controllers/todoController');

// add todo
router.post('/todo/add', controller.addTodo);

// update todo
router.put('/todo/update/:id', controller.updateTodo);

// delete todo
router.delete('/todo/delete/:id', controller.deleteTodo);

// retrieve all todo
router.get('/todos', controller.getAllTodo);

module.exports = router;