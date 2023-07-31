import { Anotation } from "../../models";
import { AnotationRepository } from "../../repositories";

export type CreateAnotationRequestDTO = {
  userId: string;
  title: string;
  value: string;
  date: string;
};

export type CreateAnotationResponseDTO = {
  status: string;
  anotation: Anotation;
};

export class CreateAnotationUseCase {
  constructor(private anotationRepository: AnotationRepository) {}

  execute(data: CreateAnotationRequestDTO): CreateAnotationResponseDTO {
    const { userId, title, value, date } = data;

    const anotation = new Anotation(userId, title, value, date);
    this.anotationRepository.createAnotation(anotation);

    return {
      status: "Transação criada com sucesso!",
      anotation,
    };
  }
}
