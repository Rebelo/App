
//Any error that happens inside the function that use this will be called 
//and passed to the first error handling middleware that we supplied in express nodejs

//So we don't include error handling in controllers files
//They are all in middleware

module.exports.AsyncWrapper = function AsyncWrapper(fn) {
    return (req, res, next) => {
        return fn(req, res).catch(next);
    }
}