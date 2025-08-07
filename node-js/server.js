const express = require('express');
const { rateLimitingMiddleware } = require('./rateLimitingMiddleware');
const app = express();


app.use(rateLimitingMiddleware);

app.get("/", (req, res) => {
    return res.send('Hy i am response')
})

app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
})