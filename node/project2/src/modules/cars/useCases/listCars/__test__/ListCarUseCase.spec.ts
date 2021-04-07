import { CarRepositoryFake } from "@modules/cars/repositories/fake/CarRepositoryFake";

import { ListCarUseCase } from "../ListCarUseCase";

let listCarsUseCase: ListCarUseCase;
let carsRepoFake: CarRepositoryFake;
describe("List Cars", () => {
  beforeEach(() => {
    carsRepoFake = new CarRepositoryFake();
    listCarsUseCase = new ListCarUseCase(carsRepoFake);
  });

  it("Should be able to list all cars", async () => {
    const car = await carsRepoFake.create({
      brand: "Porsche",
      category_id: "1dc7c93b-7198-43dd-b319-e0322dc1eb83",
      daily_rate: 100,
      description: "Description Car 2",
      fine_amount: 23,
      license_plate: "ABC-444",
      name: "Civic",
    });

    await carsRepoFake.create({
      brand: "Honda",
      category_id: "1dc7c93b-7198-43dd-b319-e0322dc1eb83",
      daily_rate: 100,
      description: "Description Car 23",
      fine_amount: 23,
      license_plate: "ABC-4446",
      name: "Civic",
    });
    const cars = await listCarsUseCase.execute({});

    expect(cars[0]).toEqual(car);
  });

  it("Should be able to list cars by brand", async () => {
    await carsRepoFake.create({
      brand: "Porsche",
      category_id: "1dc7c93b-7198-43dd-b319-e0322dc1eb83",
      daily_rate: 100,
      description: "Description Car 2",
      fine_amount: 23,
      license_plate: "ABC-444",
      name: "Civic",
    });

    const cars = await listCarsUseCase.execute({
      brand: "Porsche",
    });

    expect(cars[0]).toMatchObject({
      brand: "Porsche",
    });
  });

  it("Should be able to list cars by name", async () => {
    await carsRepoFake.create({
      brand: "Porsche",
      category_id: "1dc7c93b-7198-43dd-b319-e0322dc1eb83",
      daily_rate: 100,
      description: "Description Car 2",
      fine_amount: 23,
      license_plate: "ABC-444",
      name: "Civic",
    });

    const cars = await listCarsUseCase.execute({
      name: "Civic",
    });

    expect(cars[0]).toMatchObject({
      name: "Civic",
    });
  });
  it("Should be able to list cars by category", async () => {
    await carsRepoFake.create({
      brand: "Porsche",
      category_id: "12345",
      daily_rate: 100,
      description: "Description Car 2",
      fine_amount: 23,
      license_plate: "ABC-444",
      name: "Civic",
    });

    const cars = await listCarsUseCase.execute({
      category_id: "12345",
    });

    expect(cars[0]).toMatchObject({
      category_id: "12345",
    });
  });
});
