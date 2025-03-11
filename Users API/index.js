// imports
import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
// database
import connectDb from './config/db.js'

dotenv.config()
const PORT = process.env.PORT
const app = express()
connectDb()

app.use(express.json())



// routes
app.use('/users', userRoutes)
app.use('/auth', userRoutes)

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})