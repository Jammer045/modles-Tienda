const badgeGetaway = (req, res, next) => {

    return res.status(420).json({
        success: false,
        message: "La petición no puede ser procesada en este momento, favor de intentar mas tarde.",
    });
};

export default badgeGetaway