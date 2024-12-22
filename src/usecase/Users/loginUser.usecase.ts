import { usersRepository } from "../../server";

export type LoginUserDTO = {
  email: string;
  password: string;
};

type ResponseLoginUser = {
  status: string;
  success: boolean;
  id?: string;
};

export class LoginUser {
  execute(data: LoginUserDTO): ResponseLoginUser {
    const searchUser = usersRepository.findUserByCredencials(data);

    if (!searchUser) {
      return {
        status: "O usuário não foi encontrado pelo e-mail informado.",
        success: false,
        id: searchUser,
      };
    }

    return {
      status: "Login efetuado com sucesso!",
      success: true,
      id: searchUser,
    };
  }
}
