import { getRepository, Repository } from "typeorm";

import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import {
  ICarsRepository,
  IFindAvailable,
} from "@modules/cars/repositories/ICarsRepository";

import { Car } from "../entities/Car";

class CarsRespository implements ICarsRepository {
  private respository: Repository<Car>;

  constructor() {
    this.respository = getRepository(Car);
  }

  async create(data: ICreateCarDTO): Promise<Car> {
    const car = this.respository.create(data);

    await this.respository.save(car);
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

  async findAvailable(data: IFindAvailable): Promise<Car[]> {
    const carsQuery = this.respository
      .createQueryBuilder("c")
      .where("available = :available", { available: true });

    if (data.brand) {
      carsQuery.andWhere("c.brand = :brand", { brand: data.brand });
    }
    if (data.name) {
      carsQuery.andWhere("c.name = :name", { name: data.name });
    }

    if (data.category_id) {
      carsQuery.andWhere("c.category_id = :category_id", {
        category_id: data.category_id,
      });
    }

    const cars = await carsQuery.getMany();

    return cars;
  }

  async findById(car_id: string): Promise<Car> {
    const car = await this.respository.findOne(car_id);
    return car;
  }
}

export { CarsRespository };
