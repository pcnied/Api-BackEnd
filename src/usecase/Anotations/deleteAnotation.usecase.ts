import { Anotation } from "../../models";
import { AnotationRepository } from "../../repositories";

type DeleteAnotationRequestDTO = {
  id: string;
};

type DeleteAnotationResponseDTO = {
  status: string;
  anotationDeleted: Anotation;
};

export class DeleteAnotationUseCase {
  constructor(private anotationRepository: AnotationRepository) {}

  execute(data: DeleteAnotationRequestDTO): DeleteAnotationResponseDTO {
    const { id } = data;

    const anotationDeleted = this.anotationRepository.deleteAnotation(id);

    if (!anotationDeleted) {
      throw new Error("Transação não encontrada para este usuário!");
    }

    return {
      status: "Transação deletada com sucesso!",
      anotationDeleted,
    };
  }
}
