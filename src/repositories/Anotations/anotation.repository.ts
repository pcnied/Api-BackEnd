import { databaseAnotations, databaseUsers } from "../../database";
import { Anotation, User } from "../../models";
import { BaseRepository } from "../baseRepository";

export class AnotationRepository extends BaseRepository<User> {
  constructor() {
    super(databaseUsers);
  }

  createAnotation(anotation: Anotation): Anotation {
    databaseAnotations.push(anotation);
    return anotation;
  }

  deleteAnotation(id: string): Anotation | undefined {
    const index = databaseAnotations.findIndex((a) => a.id === id);
    if (index === -1) {
      return undefined;
    }

    databaseAnotations.splice(index, 1);
  }

  getAllAnotations(userId: string): Anotation[] {
    return databaseAnotations.filter((a) => a.userId === userId);
  }

  updateTransaction(
    id: string,
    item: { title: string; value: string; date: string }
  ): Anotation {
    const index = databaseAnotations.findIndex((a) => a.id === id);

    databaseAnotations[index].title = item.title;
    databaseAnotations[index].title = item.value;
    databaseAnotations[index].title = item.date;
  }
}
