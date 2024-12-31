import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { CoreEntity } from "./core.entity";
import { UserEntity } from './user.entity';

@Entity("todo")
export class TodoEntity extends CoreEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid;
  @Column({ type: "varchar", nullable: true })
  title;
  @Column({ type: "varchar", nullable: true })
  description;
  @Column({ type: "bool", default: false })
  completed;
  @Column({ type: 'date' })
  deadline;
  @Column({ name: "user_id", type: "varchar", nullable: true })
  userId;
}
