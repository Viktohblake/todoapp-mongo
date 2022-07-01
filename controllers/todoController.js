const Todo = require('../models/Todo');

// 1. Add a Todo task to a Todo collection
exports.addTodo = async (request, response) => {
    try {
        const {title, description} = request.body
        const todos = await Todo.create({title, description})
        if(!todos) {
            return response.status(400).json({
                success: false,
                message: "Problem creating Todo",
                todo: null
            });
        }
        return response.status(200).json({
            success: true,
            message: "Successsfully created Todo",
            todo: todos
        });
    } catch(error) {
        return response.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// 2. Update a particular Todo task
exports.updateTodo = async (request, response) => {
    try {
        const {title, description} = request.body;
        const update = await Todo.findOneAndUpdate({_id: request.params.id}, {title, description})
        if(!update) {
            return response.status(400).json({
                success: false,
                message: 'Failed to update'
            });
        }
        return response.status(200).json({
            success: true,
            message: 'Todo successfully updated'
        });
    } catch (error) {
        return response.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// 3. Delete Todo task
exports.deleteTodo = async (request, response) => {
    try {
        const deleteTodo = await Todo.findByIdAndDelete({_id: request.params.id})
        if (!deleteTodo) {
            return response.status(400).json({
                success: false,
                message: 'Todo not delete'
            });
        }
        return response.status(200).json({
            success: true,
            message: 'Todo deleted'
        });
    } catch (error) {
        return response.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// 4. Retrieve all Todo tasks
exports.getAllTodo = async (request, response) => {
    try {
        const todos = await Todo.find();
        if(!todos) {
            return response.status(400).json({
                success: false,
                message: 'Unable to retrieve all Todo'
            });
        }
        return response.status(200).json({
            success: true,
            message: 'All Todos Retrieved',
            todo: todos
        });

    } catch (error) {
        return response.status(400).json({
            success: false,
            message: error.message
        });
    }
};