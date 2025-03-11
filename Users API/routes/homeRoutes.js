import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router()

router.get('/welcome', authMiddleware, (req, res)=> {
    const {userId, username, role} = req.userInfo

    res.json({
        message: 'Welcome to homepage',
        user: {
            _id: userId,
            username: username,
            role: role
        }
    })
})

export default router