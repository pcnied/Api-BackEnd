import { NextFunction, Request, Response } from "express";
import { usersRepository } from "../../server";

export function verifyUserExist(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { userId } = req.params;

  const user = usersRepository.getById(userId);

  if (!user) {
    return res.status(404).json({
      status: "Usuário não encontrado pelo ID informado.",
      success: false,
    });
  }

  next();
}
