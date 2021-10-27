import { Request, Response } from 'express'
import ClientModel from '../models/client'

async function findAll(req: Request, res: Response) {
  try {
    const data = await ClientModel.find(req.body)
    if (data) return res.send(data)
  } catch (err) {
    res.status(400).send({ success: 0 })
  }
}

async function insertOne(req: Request, res: Response) {
  const powerPlant = new ClientModel(req.body)

  try {
    const data = await powerPlant.save()
    if (data) return res.send(data)
  } catch (err) {
    res.status(400).send({ success: 0 })
  }
}

async function updateOne(req: Request, res: Response) {
  try {
    const data = await ClientModel.updateOne(
      { _id: req.params.id },
      req.body
    )
    if (data) return res.send(data)
  } catch (err) {
    res.status(400).send({ success: 0, err })
  }
}

async function deleteOne(req: Request, res: Response) {
  try {
    const data = await ClientModel.deleteOne({ _id: req.params.id })
    if (data) return res.send(data)
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
