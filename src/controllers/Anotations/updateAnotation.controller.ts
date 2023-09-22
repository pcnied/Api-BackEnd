import { Request, Response } from "express";
import { anotationRepository } from "../../server";
import {
  UpdateAnotationRequestDTO,
  UpdateAnotationUseCase,
} from "../../usecase";

export class UpdateAnotationController {
  execute(req: Request, res: Response) {
    const { id } = req.params;

    const data: UpdateAnotationRequestDTO = req.body;

    const updateAnotationUseCase = new UpdateAnotationUseCase(
      anotationRepository
    );
    const response = updateAnotationUseCase.execute(id, data);

    if (!response.success) {
      return res.status(404).json(response);
    }

    return res.status(200).json(response);
  }
}
