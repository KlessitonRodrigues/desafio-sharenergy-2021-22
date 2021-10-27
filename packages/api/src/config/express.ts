import express from 'express'

export default (): express.Application => {
  const app = express()
  const port = 3003

  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  app.listen(port, () => console.log('port: ' + port))

  return app
}
