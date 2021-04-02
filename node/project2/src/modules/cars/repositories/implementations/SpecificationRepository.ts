import { Repository, getRepository } from "typeorm";

import { Specification } from "../../entities/Specification";
import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
  }

  async findByName({ name }: { name: string }): Promise<Specification> {
    const Specification = await this.repository.findOne({
      where: {
        name,
      },
    });

    return Specification;
  }
}

export { SpecificationRepository };
