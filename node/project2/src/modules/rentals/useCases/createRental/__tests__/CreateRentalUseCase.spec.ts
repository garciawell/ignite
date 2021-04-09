import dayjs from "dayjs";

import { RentalsRepositoryFake } from "@modules/rentals/repositories/fake/RentalsRepositoryFake";
import { AppError } from "@shared/errors/AppError";

import { CreateRentalUseCase } from "../CreateRentalUseCase";

let rentalsRepository: RentalsRepositoryFake;
let createRentalUseCase: CreateRentalUseCase;
describe("Create Rental", () => {
  const dayAdd24Hours = dayjs().add(1, "day").toDate();
  beforeEach(() => {
    rentalsRepository = new RentalsRepositoryFake();
    createRentalUseCase = new CreateRentalUseCase(rentalsRepository);
  });

  it("should be able to create a new rental", async () => {
    const rental = await createRentalUseCase.execute({
      car_id: "123123145",
      expected_return_date: dayAdd24Hours,
      user_id: "123456",
    });

    expect(rental).toHaveProperty("id");
    expect(rental).toHaveProperty("start_date");
  });

  it("should not be able to create a new rental if there is another open to the same user", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        car_id: "123123145",
        expected_return_date: dayAdd24Hours,
        user_id: "123456d",
      });

      await createRentalUseCase.execute({
        car_id: "123123145",
        expected_return_date: dayAdd24Hours,
        user_id: "123456",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
  it("should not be able to create a new rental if there is another open to the same car", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        car_id: "qqq",
        expected_return_date: dayAdd24Hours,
        user_id: "321",
      });

      await createRentalUseCase.execute({
        car_id: "qqq",
        expected_return_date: dayAdd24Hours,
        user_id: "3212",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a new rental with invalid return time", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        car_id: "qqq",
        expected_return_date: dayjs().toDate(),
        user_id: "321",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
