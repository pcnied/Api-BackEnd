import { Anotation } from "../../models";
import { AnotationRepository } from "../../repositories";

export type UpdateAnotationRequestDTO = {
  title: string;
  description: string;
  date: string;
  archived?: boolean;
};

export type UpdateAnotationResponseDTO = {
  status: string;
  success: boolean;
  anotation?: Anotation | undefined;
};

export class UpdateAnotationUseCase {
  constructor(private anotationRepository: AnotationRepository) {}

  execute(
    id: string,
    data: UpdateAnotationRequestDTO
  ): UpdateAnotationResponseDTO {
    const { title, description, date, archived } = data;

    const anotation = this.anotationRepository.getAnotation(id);

    if (!anotation) {
      return {
        status: "Não foi possível atualizar a anotação. Tente novamente!",
        success: false,
      };
    }

    const isTitleChanged = title && title.trim() !== "" && title !== anotation.title;
    const isDescriptionChanged = description && description.trim() !== "" && description !== anotation.description;
    const isDateChanged = date && date.trim() !== "" && date !== anotation.date;
    const isArchivedChanged = archived !== undefined && archived !== anotation.archived;

    if (!isTitleChanged && !isDescriptionChanged && !isDateChanged && !isArchivedChanged) {
      return {
        status: "É necessário editar pelo menos um dos campos.",
        success: false,
      };
    }

    const anotationUpdated = this.anotationRepository.updateAnotation(id, {
      title: title || anotation.title,
      description: description || anotation.description,
      date: date || anotation.date,
      archived: archived !== undefined ? archived : anotation.archived,
    });

    return {
      status: "Anotação atualizada com sucesso!",
      success: true,
      anotation: anotationUpdated,
    };
  }
}
