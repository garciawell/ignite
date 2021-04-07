import { Repository, getRepository } from "typeorm";

import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "@modules/cars/repositories/ISpecificationRepository";

import { Specification } from "../entities/Specification";

class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({
      description,
      name,
    });

    const spec = await this.repository.save(specification);
    return spec;
  }

  async findByName({ name }: { name: string }): Promise<Specification> {
    const Specification = await this.repository.findOne({
      where: {
        name,
      },
    });

    return Specification;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const Specification = await this.repository.findByIds(ids);
    return Specification;
  }
}

export { SpecificationRepository };
