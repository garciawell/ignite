import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("cars")
class Car {
  id?: string;

  name: string;

  description: string;

  daily_date: number;

  available: boolean;

  license_plate: string;

  fine_amount: number;

  brand: string;

  category_id: string;

  created_at: Date;

  // constructor() {
  //   if (!this.id) {
  //     this.id = uuidV4();
  //   }
  // }
}

export { Car };
