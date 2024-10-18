const badRequestHandler = (req, res, next) => {
  if (!req.body || !req.body.name) {
    return res.status(400).json({
      success: false,
      message: "Required data (name) is missing from the request body.",
    });
  }
  next();
};

export default badRequestHandler;