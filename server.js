const express = require('express');
const loggerMiddleware = require('./LoggerMiddleware');

const app = express();
const PORT = 3000;

// Use the middleware globally
app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});