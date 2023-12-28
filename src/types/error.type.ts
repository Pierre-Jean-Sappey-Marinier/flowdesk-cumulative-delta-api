export abstract class HttpError extends Error {
  abstract statusCode: number;
}

export class BadRequestError extends HttpError {
  statusCode = 400;

  constructor(message: string) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }
}
