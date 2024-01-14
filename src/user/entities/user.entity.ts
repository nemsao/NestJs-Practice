import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    BaseEntity,
    OneToMany,
    JoinColumn,
  } from "typeorm";
import { Project } from "./project.entity";
import { Task } from "./task.entity";
  
  @Entity({name:"User"})
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn({ name: "id", type: "int" })
    id: number;
    @Column({ type: "varchar", name: "name", length: 255, nullable: false })
    username: string;
    @Column({ type: "varchar", name: "email", length: 255 })
    email: string;
    @Column({ type: "date", name: "Date of birth" })
    dateOfBirth: Date;
    @Column({ type: "boolean", name: "isActive", default: true })
    isActive: boolean;
    @Column({ type: "varchar", name: "password", nullable: false, length: 255 })
    password: string;
    @Column({type:Date,name:"createAt",nullable:true})
    createdAt:Date;
    @Column({ type: "varchar", name: "inviedId", nullable: false, length: 255 })
    inviteId: string;
    @ManyToMany(() => Project, (project) => project.Users, {
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    })
    projects: Project[];
  
    @OneToMany(() => Task, (task) => task.AssignTo, { onDelete: "NO ACTION" })
    @JoinColumn({ name: "tasks" })
    tasks: Task[];

  }
  