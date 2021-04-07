import { CarRepositoryFake } from "@modules/cars/repositories/fake/CarRepositoryFake";

import { CreateCarUseCase } from "../CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarRepositoryFake;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepository = new CarRepositoryFake();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it("Should be able to create a car", async () => {
    await createCarUseCase.execute({
      brand: "Porsche",
      category_id: "category",
      daily_rate: 100,
      description: "Description Car",
      fine_amount: 23,
      license_plate: "ABC-1234",
      name: "Name Car",
    });
  });
});
