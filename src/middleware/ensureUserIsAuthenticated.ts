import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

type IPayload = {
  sub: string
}
export function ensuereIsAuthenticated(
  request: Request, 
  response: Response, 
  next: NextFunction
  ) {
  const authToken = request.headers.authorization

  if (!authToken) {
    return response.status(401).json({
      errorCode: "invalid token"
    })
  }

  const [,token ] = authToken.split(' ')

  try {
    const { sub } = verify(token, '345tyujdfghj456yudfghj456yuidfghj456yu') as IPayload

    // @ts-ignore
    request.user_id = sub

    return next()
  } catch (error) {
    return response.status(401).json({
      errorCode: 'token expired'
    })
  }

}