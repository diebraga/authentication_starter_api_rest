import { Request, Response } from 'express'
import { DeleteUserByIdService } from '../services/DeleteUserByIdService'

class DeleteUserByIdController {
  async handle(request: Request, response: Response) {
    const user_id = request.params.id

    const service = new DeleteUserByIdService()

    try {
      const result = await service.execute(Number(user_id))
      return response.json(result)
    } catch (error: any) {
      return response.status(500).json({ error: error.message })
    }  
  }
}

export { DeleteUserByIdController }