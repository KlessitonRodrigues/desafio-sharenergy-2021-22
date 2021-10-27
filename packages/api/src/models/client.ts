import mongoose from 'mongoose'

const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  powerPlants: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: 'POWERPLANT' },
      stocks: { type: String, required: true }
    }
  ]
})

const ClientModel = mongoose.model('CLIENT', ClientSchema)

export default ClientModel
