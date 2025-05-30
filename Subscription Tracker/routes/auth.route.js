import {Router} from 'express'

const authRoute = Router()

authRoute.post('/login', (req, res) => res.send({title: 'Login'}))
authRoute.post('/sign-up', (req, res)=> res.send({title: 'Sign up'}))
authRoute.post('/sign-out', (req, res)=> res.send({title: 'Sign out'}))

export default authRoute