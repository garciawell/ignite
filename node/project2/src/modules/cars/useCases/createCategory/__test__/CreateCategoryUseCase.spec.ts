import { AppError } from "../../../../../errors/AppError";
import { CategoriesRepositoryFake } from "../../../repositories/in-memory/CategoriesRepositoryFake";
import { CreateCategoryUseCase } from "../CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let createRepository: CategoriesRepositoryFake;

describe("Create Category", () => {
  beforeEach(() => {
    createRepository = new CategoriesRepositoryFake();
    createCategoryUseCase = new CreateCategoryUseCase(createRepository);
  });

  it("Should be able to create a new category", async () => {
    await createCategoryUseCase.execute({ description: "teste", name: "suv" });

    const cat = await createRepository.findByName("suv");

    expect(cat).toHaveProperty("id");
  });

  it("Should not be able to create a new category with same name", async () => {
    expect(async () => {
      await createCategoryUseCase.execute({
        description: "teste",
        name: "suv",
      });
      await createCategoryUseCase.execute({
        description: "teste",
        name: "suv",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
