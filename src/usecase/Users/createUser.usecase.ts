import { UsersRepository } from "../../repositories";

export type UserDTO = {
  name: string;
  email: string;
  password: string;
};

type ResponseCreate = {
  success: boolean;
  message: string;
  data?: UserDTO & { id: string };
};

export class CreateUser {
  execute(dados: UserDTO): ResponseCreate {
    const repository = new UsersRepository();

    const usersExists = repository
      .listUsers()
      .some((user) => user.email === dados.email);

    if (usersExists) {
      return {
        success: false,
        message: "Já existe um usário com o e-mail inserido.",
      };
    }

    const userCreated = repository.createUser(dados);

    return {
      success: true,
      message: "Conta criada com sucesso!",
      data: userCreated,
    };
  }
}
