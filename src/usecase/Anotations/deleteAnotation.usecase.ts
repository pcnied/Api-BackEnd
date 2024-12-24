import { Anotation } from "../../models";
import { AnotationRepository } from "../../repositories";

type DeleteAnotationRequestDTO = {
  id: string;
};

type DeleteAnotationResponseDTO = {
  status: string;
  success: boolean;
  anotation?: Anotation;
};

export class DeleteAnotationUseCase {
  constructor(private anotationRepository: AnotationRepository) {}

  execute(data: DeleteAnotationRequestDTO): DeleteAnotationResponseDTO {
    const { id } = data;

    const anotation = this.anotationRepository.deleteAnotation(id);

    if (!anotation) {
      return {
        status: "Anotação não encontrada para este usuário. Tente novamente!",
        success: false,
      };
    }

    return {
      status: "Anotação deletada com sucesso!",
      success: true,
      anotation,
    };
  }
}
