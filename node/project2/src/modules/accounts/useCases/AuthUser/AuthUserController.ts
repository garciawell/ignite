import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthUserCase } from "./AuthUserCase";

class AuthUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { password, email } = req.body;

    const authUseCase = container.resolve(AuthUserCase);

    const auth = await authUseCase.execute({ email, password });

    return res.json(auth);
  }
}

export { AuthUserController };
