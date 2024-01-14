import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  BaseEntity,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./user.entity";
import { Status } from "./status.entity";
import { Priority } from "./priority.entity";
import { Project } from "./project.entity";
@Entity("Task")
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: "varchar", name: "name" })
  name: string;
  @Column({ type: "varchar", name: "description" })
  description: string;
  @Column({ type: "int", name: "status" })
  status: number;
  @Column({ type: "varchar", name: "filename" })
  filename: string;
  @OneToOne(() => User, (user) => user.tasks, { onDelete: "SET NULL" })
  @JoinColumn({ name: "AssignTo" })
  AssignTo: User;

  @ManyToOne(() => Status, (status) => status.tasks, { onDelete: "NO ACTION" })
  @JoinColumn({ name: "Status" })
  Status: Status;

  @ManyToOne(() => Priority, (priority) => priority.tasks, {
    onDelete: "NO ACTION",
  })
  @JoinColumn({ name: "Priority" })
  Priority: Priority;
  @ManyToOne(() => Project, (project) => project.tasks, {
    onDelete: "SET NULL",
  })
  @JoinColumn({ name: "Project" })
  Project: Project;
}
