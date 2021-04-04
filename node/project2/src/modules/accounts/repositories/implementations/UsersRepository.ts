import { getRepository, Repository } from "typeorm";

import { ICreateUsersDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UserRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    password,
    email,
    username,
    driver_license,
  }: ICreateUsersDTO): Promise<void> {
    const user = await this.repository.create({
      name,
      password,
      email,
      username,
      driver_license,
    });

    await this.repository.save(user);
  }
}

export { UserRepository };
