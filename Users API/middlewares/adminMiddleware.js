
const adminMiddleware = (req, res, next) => {
   
    if(req.userInfo.role !== 'admin'){
       return  res.status(404).json({
            success: false,
            message: "Not authorized"
        })
    }
    next()
}

export default adminMiddleware