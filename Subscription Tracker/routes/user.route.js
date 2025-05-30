import {Router} from 'express'

const userRoute = Router()


userRoute.get('/', (req, res)=> res.send({title: 'Get All Users'}))
userRoute.get('/:id', (req, res)=> res.send({title: 'Get user details'}))
userRoute.post('/:id', (req, res)=> res.send({title: 'Create new user'}))
userRoute.put('/:id', (req, res)=> res.send({title: 'Update user'}))
userRoute.delete(':id', (req, res)=> res.send({title: 'Delete User'}))


export default userRoute