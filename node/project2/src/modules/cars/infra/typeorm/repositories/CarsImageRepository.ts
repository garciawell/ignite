import { getRepository, Repository } from "typeorm";

import {
  ICarsImage,
  ICarsImageRepository,
} from "@modules/cars/repositories/ICarsImageRepository";

import { CarImage } from "../entities/CarImage";

class CarsImageRepository implements ICarsImageRepository {
  private repository: Repository<CarImage>;

  constructor() {
    this.repository = getRepository(CarImage);
  }

  async create(data: ICarsImage): Promise<CarImage> {
    const carImage = this.repository.create(data);

    await this.repository.save(carImage);

    return carImage;
  }
}

export { CarsImageRepository };
