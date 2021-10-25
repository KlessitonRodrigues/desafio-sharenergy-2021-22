import express from 'express'

import auth from './routes/auth'

const routes = express.Router()

// Auth
routes.get('/auth', auth.singIn)

export default routes
