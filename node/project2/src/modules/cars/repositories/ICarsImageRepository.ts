import { CarImage } from "../infra/typeorm/entities/CarImage";

export type ICarsImage = {
  image_name: string;
  car_id: string;
};
interface ICarsImageRepository {
  create(data: ICarsImage): Promise<CarImage>;
}
export { ICarsImageRepository };
