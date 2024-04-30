const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.put('/note/:username/:content', async (req, res) => {
    try {
        const { username, content } = req.params;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.note = content;
        await user.save();

        res.status(200).json({ message: 'Note updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update note' });
    }
});

module.exports = router;
