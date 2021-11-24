import prismaClient from "../lib";

class DeleteUserByIdService {
  async execute(user_id: number) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: Number(user_id)
      }
    })
  
    if (!user?.id) {
      throw new Error("User not found!");
    }
  
    const deleteUser = await prismaClient.user.delete({
      where: {
        id: Number(user_id),
      },
    })

    const userResponse = {
      id: deleteUser?.id,
      name: deleteUser?.name,
      surname: deleteUser?.surname,
      email: deleteUser?.email
    }

    return userResponse
  }
}

export { DeleteUserByIdService }