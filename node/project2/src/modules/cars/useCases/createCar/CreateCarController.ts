import { Request, Response } from "express";
import { container } from "tsyringe";

import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";

import { CreateCarUseCase } from "./CreateCarUseCase";

class CreateCarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const data: ICreateCarDTO = req.body;

    const createCarUseCase = container.resolve(CreateCarUseCase);

    const car = await createCarUseCase.execute(data);

    return res.status(201).json(car);
  }
}

export { CreateCarController };
