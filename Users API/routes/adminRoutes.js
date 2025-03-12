import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import adminMiddleware from '../middlewares/adminMiddleware.js'

const router = express.Router()

router.get('/admin', authMiddleware, adminMiddleware, (req, res)=> {
    res.send('Welcome Admin')
})

export default router;