import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleware from '../middlewares/adminMiddleware.js';
import uploadMiddleware from '../middlewares/uploadImageMiddleware.js';
import uploadImage from '../controllers/imageController.js'


const router = express.Router()
// upload image
router.post('/upload', authMiddleware, adminMiddleware, uploadMiddleware.single('image'), uploadImage)
// get all the images


export default router;
