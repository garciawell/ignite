import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Category";

import { ICarsRepository } from "../ICarsRepository";

class CarRepositoryFake implements ICarsRepository {
  cars: Car[] = [];

  async create(data: ICreateCarDTO): Promise<void> {
    const cars = new Car();

    Object.assign(cars, {
      ...data,
    });

    this.cars.push(cars);
  }
}

export { CarRepositoryFake };
