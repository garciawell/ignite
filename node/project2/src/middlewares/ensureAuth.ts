import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UserRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, process.env.AUTH_TOKEN) as IPayload;
    const usersRepository = new UserRepository();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new Error("user does not exists!");
    }
    next();
  } catch (err) {
    throw new Error("Invalid token!");
  }
}
