
errorHandler = (error, req, res, next) => {
    console.log("error handler is working");
    console.log(error);
    return res.status(error.status || 500).json({ message: error.message || "Enternet server error" });

}
module.exports = errorHandler;