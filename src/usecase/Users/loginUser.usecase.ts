import { UsersRepository } from "../../repositories";

export type LoginUserDTO = {
  email: string;
  password: string;
};

type ResponseLoginUser = {
  success: boolean;
  message: string;
  data?: string;
};

export class LoginUser {
  execute(data: LoginUserDTO): ResponseLoginUser {
    const repository = new UsersRepository();

    const searchUser = repository.findUserByCredencials(data);

    if (!searchUser) {
      return {
        success: false,
        message: "O usuário não foi encontrado pelo ID.",
        data: searchUser,
      };
    }

    return {
      success: true,
      message: "Login efetuado com sucesso!",
      data: searchUser,
    };
  }
}
