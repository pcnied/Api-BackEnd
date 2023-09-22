import { Request, Response } from "express";
import { anotationRepository } from "../../server";
import { CreateAnotationUseCase } from "../../usecase";

export class CreateAnotationController {
  public execute(req: Request, res: Response) {
    const { userId } = req.params;
    const { title, description, date } = req.body;

    const createAnotationUseCase = new CreateAnotationUseCase(
      anotationRepository
    );

    const response = createAnotationUseCase.execute({
      userId,
      title,
      description,
      date,
    });

    if (!response.success) {
      return res.status(404).json(response);
    }

    return res.status(200).json(response);
  }
}
