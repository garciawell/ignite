import { NextFunction, Request, Response } from "express";

import { UserRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "@shared/errors/AppError";

export async function ensureAdmin(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { id } = req.user;

  const userRepo = new UserRepository();

  const user = await userRepo.findById(id);

  if (!user.isAdmin) {
    throw new AppError("User isn't admin!");
  }
  return next();
}
