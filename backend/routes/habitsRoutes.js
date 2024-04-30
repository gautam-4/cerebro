const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/habits/:username/:name', async (req, res) => {
    try {
        const { username, name } = req.params;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.habits.push({ name });
        await user.save();

        res.status(201).json({ message: 'Habit added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add habit' });
    }
});

router.get('/habits/:username', async (req, res) => {
    try {
        const { username } = req.params;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(user.habits);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch habits' });
    }
});

router.put('/habits/:username/:habitId/:action', async (req, res) => {
    try {
        const { username, habitId, action } = req.params;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const habit = user.habits.id(habitId);
        if (!habit) {
            return res.status(404).json({ error: 'Habit not found' });
        }

        if(action==='plus' && habit.streak>0){
            habit.streak++;
        }
        else if(action==='plus' && habit.streak<0){
            habit.streak = 1;
        }
        else if(action==='minus' && habit.streak>0){
            habit.streak = -1;
        }
        else if(action==='minus' && habit.streak<0){
            habit.streak--;
        }
        await user.save();

        res.status(200).json({ message: 'Habit updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update habit' });
    }
});

router.delete('/habits/:username/:habitId', async (req, res) => {
    try {
        const { username, habitId } = req.params;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.habits.pull(habitId);
        await user.save();

        res.status(200).json({ message: 'Habit deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete habit' });
    }
});

module.exports = router;
