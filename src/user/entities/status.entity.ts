import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Task } from "./task.entity";

@Entity("Status")
export class Status extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "id", type: "int" })
  id: number;
  @Column({ type: "varchar", name: "name", length: 255, nullable: false })
  name: string;
  @Column({ type: "int", name: "order" })
  order: number;
  @Column({ type: "boolean", name: "visibe" })
  visible: boolean;
  @OneToMany(() => Task, (task) => task.Status, { onDelete: "NO ACTION" })
  @JoinColumn({ name: "Tasks" })
  tasks: Task[];
}
