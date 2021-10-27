import express from 'express'

import auth from './routes/auth'
import clients from './routes/clients'
import powerPlants from './routes/plants'

const routes = express.Router()

// auth
routes.post('/auth', auth.singIn)

// clients
routes.get('/api/clients', clients.findAll)
routes.post('/api/clients', clients.insertOne)
routes.put('/api/clients/:id', clients.updateOne)
routes.delete('/api/clients/:id', clients.deleteOne)

// plants
routes.get('/api/plants', powerPlants.findAll)
routes.post('/api/plants', powerPlants.insertOne)
routes.put('/api/plants/:id', powerPlants.updateOne)
routes.delete('/api/plants/:id', powerPlants.deleteOne)

export default routes
