import prismaClient from "../lib";

class UpdateUserByIdService {
  async execute(user_id: number, name: string, surname: string) {
  const updateUser = await prismaClient.user.update({
    where: {
      id: Number(user_id),
    },
    data: {
      name: name,
      surname: surname
    }
  })

    return updateUser
  }
}

export { UpdateUserByIdService }