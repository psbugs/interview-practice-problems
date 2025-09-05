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

run
eventEmitter();

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/public/index.html")
});

let data = 'Your post is available.'
app.get('/get-data', (req, res) => {
    // assume that you will take your data from db server
    res.send({
        data
    })
});

app.get('/update-data', (req, res) => {
    data = "You post gets deleted";
    res.send({
        data
    });
});

app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
});