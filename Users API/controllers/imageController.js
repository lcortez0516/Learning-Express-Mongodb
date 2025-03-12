import Image from '../models/imageModel.js'
import uploadToCloudinary from '../utils/cloudinaryHelper.js'

const uploadImage = async(req, res)=> {
    try {
        // check if file exists
        if(!req.file){
            return res.status(404).json({
                success: false,
                message: 'File doesnt exist'
            })
        }
        // upload the image using the helper
        const {url, publicId} = await uploadToCloudinary(req.file)

        // store the image url and public id to the database
        const newImage = new Image({
            url,
            publicId,
            uploadedBy: req.userInfo.userId
        })
        
        await newImage.save()
        res.status(201).json({
            success: true,
            message: 'Image uploaded successfully'
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'An error occurred while uploading the image'
        })
    }
}

export default uploadImage