import { CarRepositoryFake } from "@modules/cars/repositories/fake/CarRepositoryFake";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "../CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarRepositoryFake;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepository = new CarRepositoryFake();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it("Should be able to create a car", async () => {
    const car = await createCarUseCase.execute({
      brand: "Porsche",
      category_id: "category",
      daily_rate: 100,
      description: "Description Car",
      fine_amount: 23,
      license_plate: "ABC-1234",
      name: "Name Car",
    });

    expect(car).toHaveProperty("id");
  });

  it("Should be not be able to create a car with exists license plate", () => {
    expect(async () => {
      await createCarUseCase.execute({
        brand: "Porsche",
        category_id: "category",
        daily_rate: 100,
        description: "Description Car",
        fine_amount: 23,
        license_plate: "ABC-1234",
        name: "Name Car 2",
      });

      await createCarUseCase.execute({
        brand: "Porsche",
        category_id: "category",
        daily_rate: 100,
        description: "Description Car",
        fine_amount: 23,
        license_plate: "ABC-1234",
        name: "Name Car 1",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      brand: "Porsche",
      category_id: "category",
      daily_rate: 100,
      description: "Description Car",
      fine_amount: 23,
      license_plate: "ABC-12345",
      name: "Name Car 1",
    });

    expect(car.available).toBe(true);
  });
});
