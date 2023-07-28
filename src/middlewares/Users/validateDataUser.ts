import { NextFunction, Request, Response } from "express";

export function validateDataUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Todos os dados precisam ser informados.",
    });
  }

  if (name.length < 3) {
    return res.status(400).json({
      success: false,
      message: "O nome precisa ter no mínimo 3 carecteres. Tente novamente!",
    });
  }

  if (!email.includes("@") || !email.includes(".com")) {
    return res.status(400).json({
      success: false,
      message: "E-mail inválido. Tente novamente!",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: "A senha precisa ter no mínimo 6 carecteres. Tente novamente!",
    });
  }

  next();
}
