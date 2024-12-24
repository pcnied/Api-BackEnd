import { Anotation } from "../../models";
import { AnotationRepository } from "../../repositories";

type GetAnotationRequestDTO = {
  id: string;
};

type GetAnotationResponseDTO = {
  status: string;
  success: boolean;
  anotation?: Anotation;
};

export class GetAnotationUseCase {
  constructor(private anotationRepository: AnotationRepository) {}

  execute(data: GetAnotationRequestDTO): GetAnotationResponseDTO {
    const { id } = data;

    const anotation = this.anotationRepository.getAnotation(id);

    if (!anotation) {
      return {
        status: "Não foi possível encontrar a anotação. Tente novamente!",
        success: false,
      };
    }

    return {
      status: "Anotação encontrada com sucesso!",
      success: true,
      anotation,
    };
  }
}
