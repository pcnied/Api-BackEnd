import { Anotation } from "../../models";
import { AnotationRepository } from "../../repositories";

type GetAnotationRequestDTO = {
  id: string;
};

type GetAnotationResponseDTO = {
  status: string;
  anotation: Anotation;
};

export class GetAnotationUseCase {
  constructor(private anotationRepository: AnotationRepository) {}

  execute(data: GetAnotationRequestDTO): GetAnotationResponseDTO {
    const { id } = data;
  }
}
