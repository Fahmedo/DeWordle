import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsEmail, IsBoolean } from 'class-validator';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column({ default: false })
  @IsBoolean()
  isSuperAdmin: boolean;
}
