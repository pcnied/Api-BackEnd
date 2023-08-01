import { NextFunction, Request, Response } from "express";

export function verifyUpdateAnotation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { title, value, date } = req.body;

  if (!title && !value && !date) {
    return res.status(400).json({
      error: "É necessário editar pelo menos uma das propriedades.",
    });
  }

  next();
}
