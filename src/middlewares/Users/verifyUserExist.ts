import { NextFunction, Request, Response } from "express";
import { anotationRepository } from "../../server";

export function verifyUserExist(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { userId } = req.params;

  const user = anotationRepository.getById(userId);

  if (!user) {
    return res.status(404).json({
      status: "Usuário não encontrado pelo ID informado.",
    });
  }

  next();
}
