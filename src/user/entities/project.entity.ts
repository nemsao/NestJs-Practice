import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  BaseEntity,
  OneToMany,
  JoinTable,
  ManyToMany,
} from "typeorm";
import { User } from "./user.entity";
import { Task } from "./task.entity";
import { InvitedId } from "./inviteId.entity";
@Entity("Project")
export class Project extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: "varchar", name: "name" })
  name: string;
  @Column({ type: "varchar", name: "slug",unique:true })
  slug: string;
  @Column({ type: "int", name: "process" })
  process: number;
  @Column({ type: "date", name: "start date" })
  startDate: Date;
  @Column({ type: "date", name: "end date" })
  endDate: Date;
  @OneToMany(() => Task, (task) => task.Project,{onDelete:"NO ACTION"})
  @JoinColumn({ name: "TaskId" ,})
  tasks: Task[];
  @ManyToMany(() => User, (user) => user.projects, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinTable({
    name: "user_project",
    joinColumn: {
      name: "User_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "Project_id",
      referencedColumnName: "id",
    },
  })
  Users: User[];

  @OneToMany(() => InvitedId, (inviteId) => inviteId.project,{onDelete:"NO ACTION"})
  @JoinColumn({ name: "InviteId" })
  inviteId: InvitedId[];
}
