import { User } from "@modules/accounts/infra/typeorm/entities/User";

import { ICreateUsersDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

class UserRepositoryFake implements IUsersRepository {
  users: User[] = [];

  async create(data: ICreateUsersDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      ...data,
    });

    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }
}

export { UserRepositoryFake };
