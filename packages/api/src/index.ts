import env from 'dotenv'
import configMongo from './config/mongo'
import configExpress from './config/express'
import routes from './routes'

env.config()

const client = configMongo()
const app = configExpress()

app.use(routes)

export { client, app }
