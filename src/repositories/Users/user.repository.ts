import { databaseUsers } from "../../database";
import { User } from "../../models";
import { UserDTO } from "../../usecase";
import { LoginUserDTO } from "../../usecase/Users/loginUser.usecase";

export class UsersRepository {
  // Listar usuários
  listUsers() {
    const users: User[] = databaseUsers;

    return users.map((user) => user.toJSON());
  }

  createUser(dados: UserDTO) {
    const user = new User(dados.name, dados.email, dados.password);

    databaseUsers.push(user);

    return user.toJSON();
  }

  findUserByCredencials(data: LoginUserDTO) {
    const user = databaseUsers.find(
      (i) =>
        i.toJSON().email === data.email && i.toJSON().password === data.password
    );

    if (!user) return;

    return user.toJSON().id;
  }
}
