const express = require('express');
const path = require('path');
const app = express();

// Serve the static files
app.use(express.static(path.join(__dirname, 'public')));

// Health Check Endpoint
app.get('/health', (req, res) => {
    res.sendStatus(200);
});

// Default to serving the index.html page
app.get('*', (req, res) => {
    res.sendFile(path.joint(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Secret Santa game running on port ${port}');
})
