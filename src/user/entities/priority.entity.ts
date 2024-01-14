import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Task } from "./task.entity";

@Entity("Priority")
export class Priority extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "id", type: "int" })
  id: number;
  @Column({ type: "varchar", name: "name", length: 255, nullable: false })
  name: string;
  @Column({ type: "int", name: "order" })
  order: number;
  @Column({ type: "boolean", name: "visibe" })
  visible: boolean;
  @OneToMany(() => Task, (task) => task.Priority, { onDelete: "NO ACTION" })
  @JoinColumn({ name: "Task" })
  tasks: Task[];
}
