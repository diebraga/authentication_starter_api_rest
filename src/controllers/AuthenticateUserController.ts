import { Request, Response } from 'express'
import { AuthenticateUserService } from '../services/AuthenticateUserService'

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body

    const service = new AuthenticateUserService()

    try {
      const token = await service.execute({
        email,
        password
      })  
      return response.json({ token: token })
    } catch (error: any) {
      response.status(401).json({ error: error.message })
    }
  }
}

export { AuthenticateUserController }