import { Anotation } from "../../models";
import { AnotationRepository } from "../../repositories";

export type CreateAnotationRequestDTO = {
  userId: string;
  title: string;
  description: string;
  date: string;
};

export type CreateAnotationResponseDTO = {
  status: string;
  success: boolean;
  anotation: Anotation;
};

export class CreateAnotationUseCase {
  constructor(private anotationRepository: AnotationRepository) {}

  execute(data: CreateAnotationRequestDTO): CreateAnotationResponseDTO {
    const { userId, title, description, date } = data;

    const anotation = new Anotation(userId, title, description, date);
    this.anotationRepository.createAnotation(anotation);

    return {
      status: "Anotação criada com sucesso!",
      success: true,
      anotation,
    };
  }
}
