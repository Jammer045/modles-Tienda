import { nameStore } from "../controllers/stores/read.js";

const badApplicationHandler = (req, res, next) => {
  if (nameStore !== req.params.name) {
    return res.status(400).json({
      success: false,
      message: "La petición no es válida, favor de verificar.", 
    });
  }
  next(); 
};

export default badApplicationHandler;