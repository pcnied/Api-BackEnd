import { Request, Response } from "express";
import { anotationRepository } from "../../server";
import { GetAllAnotationsUseCase } from "../../usecase";

export class GetAllAnoationsController {
  execute(req: Request, res: Response) {
    const { userId } = req.params;

    const getAllAnotationsUseCase = new GetAllAnotationsUseCase(
      anotationRepository
    );

    const response = getAllAnotationsUseCase.execute(userId);

    return res.status(200).json(response);
  }
}
