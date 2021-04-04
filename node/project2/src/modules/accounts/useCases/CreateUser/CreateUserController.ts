import { Request, Response } from "express";
import { container } from "tsyringe";

import { ICreateUsersDTO } from "../../dtos/ICreateUserDTO";
import { CreateUserCase } from "./CreateUserCase";

class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      name,
      email,
      password,
      username,
      driver_license,
    }: ICreateUsersDTO = req.body;
    const createUserCase = container.resolve(CreateUserCase);

    await createUserCase.execute({
      name,
      email,
      password,
      username,
      driver_license,
    });

    return res.status(201).send();
  }
}

export { CreateUserController };
