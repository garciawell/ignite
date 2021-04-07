import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";

export type IFindAvailable = {
  name?: string;
  category_id?: string;
  brand?: string;
};
interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  findByLicensePlate(license_plate: string): Promise<Car>;
  findAvailable(data: IFindAvailable): Promise<Car[]>;
}
export { ICarsRepository };
