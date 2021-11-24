import prismaClient from "../lib";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface IAuthenticateRequest {
  email: string | undefined
  password: string
}
class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if (!user) {
      throw new Error("Email or password incorrect!");
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error("Email or password incorrect!")
    }

    const token = sign({
      id: user.id, 
      iat: new Date().getTime() 
      }, '345tyujdfghj456yudfghj456yuidfghj456yu', {
        expiresIn: '30d',
        subject: String(user.id)
      });
    
    return token
  }
}

export { AuthenticateUserService }