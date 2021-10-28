import { Request, Response, NextFunction } from 'express'

export default (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization

  if (token === 'efseFgGEesfFEff32fw3fSEFF3') {
    next()
  } else {
    res.status(200).send({ success: 0, msg: 'not authenticated!' })
  }
}
