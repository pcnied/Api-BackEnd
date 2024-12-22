import { usersRepository } from "../../server";

export type UserDTO = {
  name: string;
  email: string;
  password: string;
};

type ResponseCreate = {
  status: string;
  success: boolean;
  data?: UserDTO & { id: string };
};

export class CreateUser {
  execute(data: UserDTO): ResponseCreate {
    const usersExists = usersRepository
      .listUsers()
      .some((user) => user.email === data.email);

    if (usersExists) {
      return {
        status: "E-mail já cadastrado. Tente novamente!",
        success: false,
      };
    }

    const userCreated = usersRepository.createUser(data);

    return {
      status: "Conta criada com sucesso!",
      success: true,
      data: userCreated,
    };
  }
}
