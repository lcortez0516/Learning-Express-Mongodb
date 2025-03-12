import multer from 'multer'
import path from 'path'

// set our multer storage
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "uploads/")
    },
    filename: function(req, file, cb){
        cb(null, 
            file.fieldname + "_" + Date.now() + path.extname(file.originalname)
        )
    }
})


// file filter function
const checkFileFilter = (req, file, cb)=> {
    console.log(file.mimetype)
    if(file.mimetype.startsWith('image') || file.mimetype === 'application/octet-stream'){
        cb(null, true)
    }else{
        cb(new Error('Please upload only images'))
    }
}

// multer middleware
const uploadMiddleware = multer({
    storage: storage,
    fileFilter: checkFileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 //5mb file size limit
    }
})

export default uploadMiddleware