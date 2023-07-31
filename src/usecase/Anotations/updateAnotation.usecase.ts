import { Anotation } from "../../models";
import { AnotationRepository } from "../../repositories";

export type UpdateAnotationRequestDTO = {
  title: string;
  value: string;
  date: string;
};

export type UpdateAnotationResponseDTO = {
  status: string;
  anotation: Anotation;
};

class UpdateAnotationUseCase {
  constructor(private anotationRepository: AnotationRepository) {}

  execute(
    id: string,
    data: UpdateAnotationRequestDTO
  ): UpdateAnotationResponseDTO {
    const { title, value, date } = data;
  }
}
