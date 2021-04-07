import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

import { ICarsRepository, IFindAvailable } from "../ICarsRepository";

class CarRepositoryFake implements ICarsRepository {
  cars: Car[] = [];

  async create(data: ICreateCarDTO): Promise<Car> {
    const cars = new Car();

    Object.assign(cars, {
      ...data,
    });

    this.cars.push(cars);

    return cars;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find((item) => item.license_plate === license_plate);
  }

  async findAvailable(data: IFindAvailable): Promise<Car[]> {
    return this.cars.filter((car) => {
      if (
        car.available ||
        (data.brand && data.brand === car.brand) ||
        (data.category_id && data.category_id === car.category_id) ||
        (data.name && data.name === car.name)
      ) {
        return car;
      }

      return null;
    });
  }
}

export { CarRepositoryFake };
