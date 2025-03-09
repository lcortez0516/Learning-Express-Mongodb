import express from 'express'
import { getAllBooks, getSingleBook, createBook, updateBook, deleteBook} from '../controllers/bookController.js'
const route = express.Router()


route.get('/', getAllBooks)
route.get('/get/:id', getSingleBook)
route.post('/create', createBook)
route.put('/update/:id', updateBook)
route.delete('/delete/:id', deleteBook)


export default route;