import prismaClient from "../lib";
import { hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface UserInterface {
  id?: number
  name: string | null
  surname: string | null
  email: string
  password: string
}

function tokenForUser(user: UserInterface) {
  const timestamp = new Date().getTime();
  return sign({ 
    id: user.id, 
    iat: timestamp 
  }, '345tyujdfghj456yudfghj456yuidfghj456yu', {
    expiresIn: '30d',
    subject: String(user.id)
  });
}

class SignUpUserService {
  async execute({ email, password, name, surname }: UserInterface) {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if (user) {
      throw new Error("User already exists!");
    }

    if (!password || !password) {
      throw new Error("Email and password must be provided!");
    }

    const passwordHash = await hash(password, 8)

    const createUser = await prismaClient.user.create({
      data: {
        name,
        surname,
        email,
        password: passwordHash,
      },
    });
  
    const createUserResponse = {
      user: {
        id: createUser.id,
        name: createUser.name,
        surname: createUser.surname,
        email: createUser.email
      },
      token: tokenForUser(createUser)
    }
      
    return createUserResponse
  }
}

export { SignUpUserService }