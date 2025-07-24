export function rateLimitingMiddleware(req,res,next){   
    const ip = req.ip;
    const requests  = {};
    const now = Date.now();
    const limit = 100;
    const timeInMiliSecond = 10*60*60;

    if(!requests[ip]) {
        requests[ip] = [];
    };
    requests[ip] = requests[ip].filter((ts)=> ts-now < timeInMiliSecond);

    if(requests[ip].length > limit){
        res.status(429).send('Too many requests');
    };
    requests[ip].push(now);
    next();
};