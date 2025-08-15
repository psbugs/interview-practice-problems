function globalErrorMiddleware(err, req, res, next) {
    if (err) {
        return res.status(err.status).send(err.message)
    }
    next()
};

module.exports = { globalErrorMiddleware }