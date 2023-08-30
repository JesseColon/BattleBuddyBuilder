const express = require('express');
const User = require('../../models/User');

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Please provide all required fields' });
        }

    
        const user = new User({
            username,
            email,
            password
        });

        await user.save();
        
        res.status(201).json({ message: 'User created successfully!' });

    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;