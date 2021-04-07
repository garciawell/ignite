import { inject, injectable } from "tsyringe";

import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

// @injectable()
class CreateCarUseCase {
  constructor(
    // @inject("CarsRepository")f
    private carsRepository: ICarsRepository
  ) {}

  async execute({ ...data }: ICreateCarDTO): Promise<void> {
    this.carsRepository.create(data);
  }
}

export { CreateCarUseCase };
