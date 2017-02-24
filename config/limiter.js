module.exports = {
    path: '*',
    method: 'all',
    lookup: 'connection.remoteAddress',
    // 5000 requests per hour, use `$ redis-cli flushall` to clear
    total: 5000,
    expire: 1000 * 60 * 60,
    onRateLimited: function (req, res, next) {
        res.status(429).send('Rate limit exceeded')
        // next({ message: 'Rate limit exceeded', status: 429 })
    }
}