import { NextFunction, Request, Response } from 'express'
import { ErrorValidator, ErrorWithStatus } from '~/models/error/ErrorCustom'

const errorHandler = (
  err: ErrorWithStatus | Error | ErrorValidator,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ErrorWithStatus) {
    return res.status(err.status).json({
      message: err.message
    })
  } else if (err instanceof Error) {
    return res.status(500).json({
      message: err.message
    })
  } else {
    return res.status(422).json(err)
  }
}

export default errorHandler
