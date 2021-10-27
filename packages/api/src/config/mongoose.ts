import mongoose from 'mongoose'

export default async () => {
  const mongoUser = process.env.MONGO_USER
  const mongoPassword = process.env.MONGO_PASS
  const mongoDbName = process.env.MONGO_DB_NAME
  const uri = `mongodb+srv://${mongoUser}:${mongoPassword}@mycluster.lvt9x.mongodb.net/${mongoDbName}`

  try {
    await mongoose.connect(uri)
  } catch (err) {
    console.log('connction fail!')
  }
  return mongoose
}
