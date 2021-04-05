import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateUsersDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    driver_license,
    email,
    password,
  }: ICreateUsersDTO): Promise<void> {
    const userAlreadyExist = await this.usersRepository.findByEmail(email);

    if (userAlreadyExist) {
      throw new AppError("User already Exists");
    }

    const passwordhash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      driver_license,
      email,
      password: passwordhash,
    });
  }
}

export { CreateUserCase };
