import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Project } from "./project.entity";
import { User } from "./user.entity";

@Entity("InvitedId")
export class InvitedId extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "id", type: "int" })
  id: number;
  @Column({ type: "int", name: "InviteToProject" })
  invitation: number;
  @OneToMany(() => Project, (project) => project.inviteId, {
    onDelete: "NO ACTION",
  })
  @JoinColumn({ name: "Project Id" })
  project: Project[];
  @OneToOne(() => User,user=>user.id, { onDelete: "NO ACTION" })
  @JoinColumn({ name: "User Id" })
  User: User;
}
