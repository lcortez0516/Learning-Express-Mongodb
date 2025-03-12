// imports
import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import homeRoutes from './routes/homeRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import imageRoutes from './routes/imageRoutes.js'
// database
import connectDb from './config/db.js'

dotenv.config()
const PORT = process.env.PORT
const app = express()
connectDb()

app.use(express.json())

// routes
app.use('/api/auth', authRoutes)
app.use('/api/home', homeRoutes)
app.use('/api', adminRoutes)
app.use('/api/image', imageRoutes)

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})