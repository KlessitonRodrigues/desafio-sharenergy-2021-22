import mongoose from 'mongoose'

const dayProduction = {
  date: { type: Date, default: Date.now },
  production: {
    time: { type: Number, required: true },
    tension: { type: Number, required: true },
    AC: { type: Number, required: true },
    kW: { type: Number, required: true },
    temperature: { type: Number, required: true }
  }
}

const powerPlantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  diaryProduction: [dayProduction]
})

export const PowerPlantModel = mongoose.model('POWERPLANTS', powerPlantSchema)

export default PowerPlantModel
