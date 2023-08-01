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

  getAnotation(id: string): Anotation | undefined {
    const anotation = databaseAnotations.find((a) => a.id === id);

    if (!anotation) {
      return undefined;
    }

    return anotation;
  }

  updateAnotation(
    id: string,
    item: { title: string; value: string; date: string }
  ): Anotation | undefined {
    const index = databaseAnotations.findIndex((a) => a.id === id);

    if (index === -1) {
      return undefined;
    }

    databaseAnotations[index].title = item.title;
    databaseAnotations[index].value = item.value;
    databaseAnotations[index].date = item.date;

    return databaseAnotations[index];
  }
}
