import { NextFunction, Request, Response } from "express";

export function verifyCreateAnotation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { title, value, date } = req.body;

  if (!title || !value || !date) {
    return res.status(400).json({
      error:
        "É necessário que todos os campos sejam preenchidos, para criar uma anotação.",
    });
  }

  if (!title) {
    return res.status(400).json({
      error: "É necessário adicionar um título para criar uma anotação.",
    });
  }

  if (!value) {
    return res.status(400).json({
      error:
        "É necessário adicionar um valor/descrição para criar uma anotação.",
    });
  }

  if (!date) {
    return res.status(400).json({
      error: "É necessário adicionar uma data para criar a anotação.",
    });
  }
  next();
}
