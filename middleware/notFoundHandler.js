
notFoundHandler = (res, req, next) => {
    console.log("error handler is working")
    return res.status(404).json({ message: "path not found" });

}
module.exports = notFoundHandler;