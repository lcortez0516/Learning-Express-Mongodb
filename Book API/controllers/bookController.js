import Book from '../models/bookModel.js'


const getAllBooks = async (req, res) => {
    try {
        const result = await Book.find()
        if(!result){
            res.status(404).json({
                success:false,
                result: 'Book id is not valid'
            })
        }

        res.status(201).json(result)
    } catch (error) {
        res.status(404).send('Invalid Id')
    }
}
const getSingleBook = async (req, res) => {
    const {id} = req.params

    try {
        console.log(id)
        const result = await Book.findById(id)
        if(!result) {
            res.status(404).json({
                success: false,
                result: 'Cannot find book'
            })
        }
        res.status(201).json({title: result.title, author: result.author, year: result.year})
    } catch (error) {
        res.status(404).send('Invalid Id')
    }

}
const createBook = async (req, res) => {
    const {title, author, year} = req.body

    try {
        const newBook = new Book({title, author, year})
        const addBook = await newBook.save()
        if(!addBook) {
            res.status(404).json({
                success: false,
                result: 'Failed to create book'
            })
        }
        res.status(201).json({message: 'Book successfully added!'})
    } catch (error) {
        res.status(404).send({message: error})
    }
}
const updateBook = async (req, res) => {
    const {title, author, year}  = req.body
    const {id} = req.params
    try {
        const updateBook = await Book.findByIdAndUpdate(id, {title, author, year})
        if(!updateBook){
            res.status(404).json({
                sucess: false,
                result: 'Failed to update book information'
            })
        }

        res.status(201).send('Book updated successfully')
    } catch (error) {
        res.status(404).send('Invalid data')
    }
}
const deleteBook = async (req, res) => {
    const {id} = req.params

    try {
        const deleteBook = await Book.findByIdAndDelete(id)
        if(!deleteBook){
            res.status(404).json({
                success: false,
                result: 'Failed to delete book'
            })
        }
        res.status(201).json({
            message: 'Successfully deleted book'
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            result: 'Failed to delete book'
        })
    }
}


export {getAllBooks, getSingleBook, updateBook, deleteBook, createBook}
