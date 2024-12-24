import { NextFunction, Request, Response } from "express";

export function verifyUpdateAnotation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { title, description, date, archived } = req.body;

  if (
    (!title || title.trim() === "") &&
    (!description || description.trim() === "") &&
    (!date || date.trim() === "") &&
    archived === undefined
  ) {
    return res.status(400).json({
      status: "É necessário editar pelo menos um dos campos.",
      success: false,
    });
  }

  next();
}
