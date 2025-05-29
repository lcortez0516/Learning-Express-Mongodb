import express from 'express'
import { PORT } from './config/env.js'
const app = express()


app.get('/', (req,res)=> {
    res.send('Hello')
})

app.listen(PORT, ()=> console.log(`Subscription Tracker APi is running on http://localhost:${PORT}`))
