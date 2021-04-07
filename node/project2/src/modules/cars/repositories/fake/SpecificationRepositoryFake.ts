import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";

import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../ISpecificationRepository";

class SpecificationReposiroryFake implements ISpecificationRepository {
  specifications: Specification[] = [];

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
    });

    this.specifications.push(specification);

    return specification;
  }
  async findByName({ name }: { name: string }): Promise<Specification> {
    return this.specifications.find((item) => item.name === name);
  }
  async findByIds(ids: string[]): Promise<Specification[]> {
    const allSpecification = this.specifications.filter((item) =>
      ids.includes(item.id)
    );

    return allSpecification;
  }
}

export { SpecificationReposiroryFake };
