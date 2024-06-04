const express = require('express');
const helmet = require('helmet');
const routes = require('./routes');

const app = express();
const PORT = 3000;

// Set up security headers using Helmet middleware
app.use(helmet());

app.use('/', routes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});