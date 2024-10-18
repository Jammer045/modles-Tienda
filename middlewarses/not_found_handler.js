const not_found_handler = (req, res, next) => {
    return res.status(404).json({ 
        success: false,
        message: "No se encontro la peticion :("
     });
}

export default not_found_handler