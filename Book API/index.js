import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import bookRoutes from './routes/bookRoutes.js'

dotenv.config()
const port = process.env.PORT || 8000
const server = express()
connectDB();
server.use(express.json())

server.use('/api/books', bookRoutes)

server.listen(port, ()=> console.log(`Server is running on port ${port}`))
