const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 8080;

// CORS (optional, update allowed origins for security in production)
app.use(cors({
    origin: '*', // Change to specific origin in production
    methods: ['GET', 'POST'],
}));

// Serve React static files
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.get('/api/greet', (req, res) => {
    const name = req.query.name;

    if (!name) {
        return res.status(400).json({ error: "Name is required." });
    }

    res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

// Serve React frontend for any other route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
