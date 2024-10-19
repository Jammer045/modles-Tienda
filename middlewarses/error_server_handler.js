const errorServerHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    
    res.status(statusCode).json({
        message: err.message || 'stores validation failed: name: Path `name` is required.',
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
}

export default errorServerHandler;