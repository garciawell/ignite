import { getRepository, Repository } from "typeorm";

import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

import { Car } from "../entities/Car";

class CarsRespository implements ICarsRepository {
  private respository: Repository<Car>;

  constructor() {
    this.respository = getRepository(Car);
  }

  async create(data: ICreateCarDTO): Promise<Car> {
    const car = this.respository.create(data);

    this.respository.save(data);
    return car;
  }
  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.respository.findOne({
      where: {
        license_plate,
      },
    });

    return car;
  }
}

export { CarsRespository };
