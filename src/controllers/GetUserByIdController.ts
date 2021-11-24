import { Request, Response } from 'express'
import { GetUserByIdService } from '../services/GetUserByIdService'

class GetUserByIdController {
  async handle(request: Request, response: Response) {
    const user_id = request.params.id

    const service = new GetUserByIdService()

    try {
      const result = await service.execute(Number(user_id))

      return response.status(200).json(result)  
    } catch (error: any) {
      return response.status(404).json({ message: error.message })  
    }
  }
}

export { GetUserByIdController }