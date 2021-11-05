import { Request, Response } from 'express'
import PowerPlantModel from '../models/powerPlant'

async function findAll(req: Request, res: Response) {
  try {
    const data = await PowerPlantModel.find(req.body)
    if (data) return res.send({ success: 1, data })
  } catch (err) {
    res.status(400).send({ success: 0 })
  }
}

async function insertOne(req: Request, res: Response) {
  const powerPlant = new PowerPlantModel(req.body)

  try {
    const data = await powerPlant.save()
    if (data) return res.send({ success: 1, data })
  } catch (err) {
    res.status(400).send({ success: 0 })
  }
}

async function updateOne(req: Request, res: Response) {
  try {
    const data = await PowerPlantModel.updateOne(
      { _id: req.params.id },
      req.body
    )
    if (data) return res.send({ success: 1, data })
  } catch (err) {
    res.status(400).send({ success: 0, err })
  }
}

async function deleteOne(req: Request, res: Response) {
  try {
    const data = await PowerPlantModel.deleteOne({ _id: req.params.id })
    if (data) return res.send({ success: 1, data })
  } catch (err) {
    res.status(400).send({ success: 0 })
  }
}

const plants = {
  findAll,
  insertOne,
  updateOne,
  deleteOne
}

export default plants
