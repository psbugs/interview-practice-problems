const express = require('express');
const { rateLimitingMiddleware } = require('./middlewares/rateLimitingMiddleware');
const { workingWithStreamsAndBuffers, globalObjects } = require('./utils/streams-globalobj');
const { globalErrorMiddleware } = require('./middlewares/globalErrorMiddleware');
const { eventEmitter } = require('./utils/events-emitter')
const app = express();


app.use(globalErrorMiddleware);
app.use(rateLimitingMiddleware);

workingWithStreamsAndBuffers();
globalObjects();

eventEmitter();

app.get("/", (req, res) => {
    return res.send('Hy i am response')
});

app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
});