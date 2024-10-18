const errorServerHandler = (req, res, next) => {
    res.status(500)
    res.json({
        message: 'Was an internal server error on your request. Please try again later.',
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

export default errorServerHandler