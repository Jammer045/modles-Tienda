import { nameStore } from "../controllers/stores/read.js";

const badRequestHandler = (req, res, next) => {
  if (nameStore !== req.params.name) {
    return res.status(400).json({
      success: false,
      message: "Request body could not be read properly.", 
    });
  }
  next(); 
};

export default badRequestHandler;