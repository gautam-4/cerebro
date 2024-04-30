const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/expenses/:username/:name', async (req, res) => {
    try {
        const { username, name } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.expenses.push({ name });
        await user.save();

        res.status(201).json({ message: 'Expense added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add expense' });
    }
});

router.get('/expenses/:username', async (req, res) => {
    try {
        const { username } = req.params;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(user.expenses);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch expenses' });
    }
});

router.delete('/expense/:username/:expenseId', async (req, res) => {
    try {
        const { username, expenseId } = req.params;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.expenses.pull(expenseId);
        await user.save();

        res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete expense' });
    }
});

module.exports = router;
