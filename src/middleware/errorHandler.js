export default (err, req, res, next) => {
    console.log(err);
    if (res.headersSent) {
        return next(err);
    }
    res.status(400).json({error: err});
};