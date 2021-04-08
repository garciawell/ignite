import { inject, injectable } from "tsyringe";

import { CarsImageRepository } from "@modules/cars/infra/typeorm/repositories/CarsImageRepository";
import { ICarsImageRepository } from "@modules/cars/repositories/ICarsImageRepository";

interface IRequest {
  car_id: string;
  images_name: string[];
}

@injectable()
class UploadImageUseCase {
  constructor(
    @inject("CarsImagesRepository")
    private carsImagesRepository: ICarsImageRepository
  ) {}

  async execute(data: IRequest): Promise<void> {
    data.images_name.map(async (image) => {
      await this.carsImagesRepository.create({
        car_id: data.car_id,
        image_name: image,
      });
    });
  }
}

export { UploadImageUseCase };
