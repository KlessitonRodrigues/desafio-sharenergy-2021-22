import { Request, Response } from 'express'

type Auth = {
  singIn: (req: Request, res: Response) => void
}

function singIn(req: Request, res: Response) {
  res.send(req.body)
}

const auth: Auth = {
  singIn
}

export default auth
