import { Anotation } from "../../models";
import { AnotationRepository } from "../../repositories";

export type UpdateAnotationRequestDTO = {
  title: string;
  value: string;
  date: string;
};

export type UpdateAnotationResponseDTO = {
  status: string;
  anotation: Anotation | undefined;
};

export class UpdateAnotationUseCase {
  constructor(private anotationRepository: AnotationRepository) {}

  execute(
    id: string,
    data: UpdateAnotationRequestDTO
  ): UpdateAnotationResponseDTO {
    const { title, value, date } = data;

    const anotation = this.anotationRepository.getAnotation(id);

    if (!anotation) {
      throw new Error("Anotação não encontrada para este usuário!");
    }

    const anotationUpdated = this.anotationRepository.updateAnotation(id, {
      title: title || anotation.title,
      value: value || anotation.value,
      date: date || anotation.date,
    });

    return {
      status: "Anotação atualizada com sucesso!",
      anotation: anotationUpdated,
    };
  }
}
