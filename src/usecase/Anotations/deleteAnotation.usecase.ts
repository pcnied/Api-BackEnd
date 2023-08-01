import { Anotation } from "../../models";
import { AnotationRepository } from "../../repositories";

type DeleteAnotationRequestDTO = {
  id: string;
};

type DeleteAnotationResponseDTO = {
  status: string;
  anotation: Anotation;
};

export class DeleteAnotationUseCase {
  constructor(private anotationRepository: AnotationRepository) {}

  execute(data: DeleteAnotationRequestDTO): DeleteAnotationResponseDTO {
    const { id } = data;

    const anotation = this.anotationRepository.deleteAnotation(id);

    if (!anotation) {
      throw new Error("Anotação não encontrada para este usuário!");
    }

    return {
      status: "Anotação deletada com sucesso!",
      anotation,
    };
  }
}
