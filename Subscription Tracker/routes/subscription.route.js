import {Router} from 'express'

const subscriptionRoute = Router()

subscriptionRoute.get('/', (req, res)=> res.send({title: 'Get all subscriptions'}))

subscriptionRoute.get('/:id', (req, res)=> res.send({title: 'Get subscription details'}))

subscriptionRoute.post('/:id', (req, res)=> res.send({title: 'Create subscription'}))

subscriptionRoute.put('/:id', (req, res)=> res.send({title: 'Update subscription'}))

subscriptionRoute.delete('/:id', (req, res)=> res.send({title: 'Delete subscription'}))

subscriptionRoute.get('/user/:id', (req, res)=> res.send({title: 'Get all user subscription'}))

subscriptionRoute.get('/upcoming-renewals', (req, res)=> res.send({title: 'Get upcoming renewals'}))



export default subscriptionRoute