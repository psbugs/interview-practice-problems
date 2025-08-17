// function rateLimitingMiddleware(req, res, next) {
//     const ip = req.ip;
//     const requests = {};
//     const now = Date.now();
//     const limit = 5;
//     const timeInMiliSecond = 1 * 60 * 60;

//     if (!requests[ip]) {
//         requests[ip] = [];
//     };
//     requests[ip] = requests[ip].filter((ts) => ts - now < timeInMiliSecond);

//     if (requests[ip].length > limit) {
//         res.status(429).send('Too many requests');
//     };
//     requests[ip].push(now);
//     console.log('requests', requests);
//     next();
// };

const rateLimitMap = new Map();
const LIMIT = 100;
const WINDOW_TIME = 1 * 60 * 1000;

function rateLimitingMiddleware(req, res, next) {
    const ip = req.ip;
    const currentTime = Date.now();
    const userData = rateLimitMap.get(ip) || { count: 0, currentTime };

    if (userData.currentTime - currentTime > WINDOW_TIME) {
        userData.count = 1;
        userData.currentTime = currentTime
    } else {
        userData.count++
    };
    rateLimitMap.set(ip, userData);

    if (userData.count > LIMIT) {
        return res.status(429).send(`Too many requests`);
    };
    console.log(rateLimitMap)
    next();
}

module.exports = { rateLimitingMiddleware }