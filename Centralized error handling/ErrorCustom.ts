import Joi from 'joi'

export class ErrorWithStatus extends Error {
  status: number
  constructor({ message, status }: { message: string; status: number }) {
    super(message)
    this.status = status
  }
}

export class ErrorValidator {
  message: string
  error: any

  constructor({ message = 'Validation error', error }: { message?: string; error: Joi.ValidationErrorItem[] }) {
    this.message = message
    this.error = error.map((item) => item.message)
  }
}
