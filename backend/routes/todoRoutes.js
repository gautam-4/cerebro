const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/todo/:username/:name', async (req, res) => {
    try {
        const { username, name } = req.params;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.todos.push({ name });
        await user.save();

        res.status(201).json({ message: 'Todo added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add todo' });
    }
});

router.get('/todo/:username', async (req, res) => {
    try {
        const { username } = req.params;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(user.todos);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch todos' });
    }
});

router.put('/todo/:username/:todoId', async (req, res) => {
    try {
        const { username, todoId } = req.params;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const todo = user.todos.id(todoId);
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        if(todo.isDone === false){
            todo.isDone = true;
        }
        else{
            todo.isDone = false;
        }
        await user.save();

        res.status(200).json({ message: 'Todo updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update todo' });
    }
});

router.delete('/todo/:username/:todoId', async (req, res) => {
    try {
        const { username, todoId } = req.params;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.todos.pull(todoId);
        await user.save();

        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete todo' });
    }
});

module.exports = router;
