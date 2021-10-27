import env from 'dotenv'
import configMongoOse from './config/mongoose'
import configExpress from './config/express'
import cors from './middlewares/cors'
import autheticate from './middlewares/autheticate'
import routes from './routes'

env.config()

async function startUp() {
  await configMongoOse()
  const app = await configExpress()

  app.use('/api', autheticate)
  app.use(cors)
  app.use(routes)
}

startUp()
