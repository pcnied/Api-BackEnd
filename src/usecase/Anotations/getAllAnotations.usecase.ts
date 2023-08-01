import { Anotation } from "../../models";
import { AnotationRepository } from "../../repositories";

// export type GetAllAnotationsRequestParamsDTO = {
//   title?: string;
// };

export type GetAllAnotationsResponseDTO = {
  status: string;
  anotations: Anotation[];
};

export class GetAllAnotationsUseCase {
  constructor(private anotationRepository: AnotationRepository) {}

  execute(userId: string) {
    const anotations = this.anotationRepository.getAllAnotations(userId);

    return {
      status:
        anotations.length > 0
          ? "Anotações encontradas com sucesso!"
          : "Nenhuma anotação cadastrada ainda!",
      anotations,
    };
  }
}
