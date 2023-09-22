import { Request, Response } from "express";
import { anotationRepository } from "../../server";
import { GetAnotationUseCase } from "../../usecase";

export class GetAnotationController {
  execute(req: Request, res: Response) {
    const { id } = req.params;

    const getAnotationUseCase = new GetAnotationUseCase(anotationRepository);

    const response = getAnotationUseCase.execute({
      id,
    });

    if (!response.success) {
      return res.status(404).json(response);
    }

    return res.status(200).json(response);
  }
}
