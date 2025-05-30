import express from 'express'
import { PORT } from './config/env.js'
import authRoute from './routes/auth.route.js'
import userRoute from './routes/user.route.js'
import subscriptionRoute from './routes/subscription.route.js'

const app = express()

app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/subscriptions', subscriptionRoute)


app.get('/', (req, res)=> res.send('Welcome'))

app.listen(PORT, ()=> console.log(`Subscription Tracker APi is running on http://localhost:${PORT}`))
