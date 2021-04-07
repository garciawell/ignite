import { CarRepositoryFake } from "@modules/cars/repositories/fake/CarRepositoryFake";
import { AppError } from "@shared/errors/AppError";

import { CreateCarSpecificationUseCase } from "../CreateCarSpecificationUseCase";

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryFake: CarRepositoryFake;
describe("Create Car Specification", () => {
  beforeEach(() => {
    carsRepositoryFake = new CarRepositoryFake();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryFake
    );
  });

  it("should be not able to add a new specification to a non-existent car", async () => {
    const car_id = "1234";
    const specifications_id = ["1234"];

    expect(async () => {
      await createCarSpecificationUseCase.execute({
        car_id,
        specifications_id,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to add a new specification to the car", async () => {
    const car = await carsRepositoryFake.create({
      brand: "Porsche",
      category_id: "1dc7c93b-7198-43dd-b319-e0322dc1eb83",
      daily_rate: 100,
      description: "Description Car 2",
      fine_amount: 23,
      license_plate: "ABC-444",
      name: "Civic",
    });

    const specifications_id = ["1234"];
    await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id,
    });
  });
});
