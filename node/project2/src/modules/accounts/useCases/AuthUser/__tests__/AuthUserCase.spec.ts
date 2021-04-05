import { AppError } from "../../../../../errors/AppError";
import { ICreateUsersDTO } from "../../../dtos/ICreateUserDTO";
import { UserRepositoryFake } from "../../../repositories/fake/UsersRepositoryFake";
import { CreateUserCase } from "../../CreateUser/CreateUserCase";
import { AuthUserCase } from "../AuthUserCase";

let authUseCase: AuthUserCase;
let userRepository: UserRepositoryFake;
let createUserCase: CreateUserCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    userRepository = new UserRepositoryFake();
    authUseCase = new AuthUserCase(userRepository);
    createUserCase = new CreateUserCase(userRepository);
  });

  it("Should be able to create token", async () => {
    const user: ICreateUsersDTO = {
      driver_license: "123123",
      email: "teste@gmail.com",
      password: "qwer1234",
      name: "John Doe",
    };

    await createUserCase.execute(user);
    const result = await authUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("should not be able to auth an nonexistent user", () => {
    expect(async () => {
      await authUseCase.execute({
        email: "false@email.com",
        password: "appqweqwe",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to auth with incorrect password", async () => {
    expect(async () => {
      const user: ICreateUsersDTO = {
        driver_license: "123123",
        email: "teste2@gmail.com",
        password: "qwer1234",
        name: "John Doe",
      };

      await createUserCase.execute(user);

      await authUseCase.execute({
        email: "teste2@gmail.com",
        password: "qqqqqqqq",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
