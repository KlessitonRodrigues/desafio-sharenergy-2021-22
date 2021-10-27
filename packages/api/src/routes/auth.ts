import { Request, Response } from 'express'

function singIn(req: Request, res: Response): any {
  const login = { user: 'admin', pass: '12345' }
  const body = req.body

  if (login.user !== body.user) {
    return res.status(401).send({ success: 0, msg: 'invalid user!' })
  }

  if (login.pass !== body.password) {
    return res.status(401).send({ success: 0, msg: 'invalid password!' })
  }

  return res
    .status(200)
    .send({ success: 1, data: { token: 'efseFgGEesfFEff32fw3fSEFF3' } })
}

const auth = {
  singIn
}

export default auth
