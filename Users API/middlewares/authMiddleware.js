    import jwt from 'jsonwebtoken'
    
    
    const authMiddleware = (req, res, next) => {
        const authHeader = req.headers['authorization']
        const token = authHeader.split(" ")[1]
        
        // get the token
        if(!token) {
           return  res.status(404).json({
                sucess: false,
                message: "Please login to continue"
            })
        }
        // decode the token
        try {
            const decodedTokenInfo = jwt.verify(token, process.env.JWT_SECRET_KEY)
            req.userInfo = decodedTokenInfo;
            next()
        } catch (error) {
            return res.status(404).json({
                sucess: false,
                message: "Please login to continue"
            })
        }
    }


    export default authMiddleware;
