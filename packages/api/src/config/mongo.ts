import { MongoClient } from 'mongodb'

export default (): MongoClient | void => {
  const mongoUser = process.env.MONGO_USER
  const mongoPassword = process.env.MONGO_PASS
  const uri = `mongodb+srv://${mongoUser}:${mongoPassword}@mycluster.lvt9x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  const client = new MongoClient(uri)

  if (!mongoUser) return console.log('without ENV')

  client.connect((err) => err && console.log('connection error'))

  return client
}
