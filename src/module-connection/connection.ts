import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany,
    JoinColumn,
  } from "typeorm";

  
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
  }
  