import { Request, Response } from "express";
import { anotationRepository } from "../../server";
import { DeleteAnotationUseCase } from "../../usecase";

export class DeleteAnotationController {
  execute(req: Request, res: Response) {
    const { id } = req.params;

    const deleteAnotationUseCase = new DeleteAnotationUseCase(
      anotationRepository
    );

    const response = deleteAnotationUseCase.execute({
      id,
    });

    if (!response.success) {
      return res.status(404).json(response);
    }

    return res.status(200).json(response);
  }
}
