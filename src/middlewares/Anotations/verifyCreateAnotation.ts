import { NextFunction, Request, Response } from "express";

export function verifyCreateAnotation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { title, description, date } = req.body;

  if (!title) {
    return res.status(400).json({
      status: "O título não foi preenchido. Tente novamente.",
      success: false,
    });
  }

  if (!description) {
    return res.status(400).json({
      status: "A propriedade descrição não foi preenchida. Tente novamente.",
      success: false,
    });
  }

  if (!date) {
    return res.status(400).json({
      status: "A propriedade data não foi preenchida. Tente novamente.",
      success: false,
    });
  }
  next();
}
