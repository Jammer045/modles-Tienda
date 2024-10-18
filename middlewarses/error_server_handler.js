const errorServerHandler = (req, res, next) => {
    res.status(500)
    res.json({
        message: '¡Ups! Algo salió mal en el servidor.',
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

export default errorServerHandler