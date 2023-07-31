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
  constructor(private userRepository: AnotationRepository) {}

  execute(userId: string) {
    const anotations = this.userRepository.getAllAnotations(userId);

    return {
      status:
        anotations.length > 0
          ? "Transações encontradas com sucesso!"
          : "Nenhuma transação cadastrada ainda!",
      anotations,
    };
  }
}
