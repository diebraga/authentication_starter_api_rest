import prismaClient from "../lib";

class GetUserByIdService {
  async execute(user_id: number) {
    const getUser = await prismaClient.user.findFirst({
      where: {
        id: user_id
      }
    })

    if (!getUser?.id) {
      throw new Error("User not found!");
    }

    const user = {
      id: getUser?.id,
      name: getUser?.name,
      surname: getUser?.surname,
      email: getUser?.email
    }
    
    return user
  }
}

export { GetUserByIdService }