const errorResponse = {
    success: false,
    error: {
        message: 'The server was unable to complete your request. Please try again later.'
    }
};

const badgeGetaway = (req, res, next) => {
    return res.status(502).json(errorResponse);
};

export default badgeGetaway;