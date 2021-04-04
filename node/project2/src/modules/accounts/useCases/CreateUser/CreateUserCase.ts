import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

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
