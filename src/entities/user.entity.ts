import {
 BeforeInsert,
 BeforeUpdate,
 Column,
 Entity,
 OneToMany,
 PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
 @PrimaryGeneratedColumn()
 id: number;

 @Column({ unique: true, nullable: false })
 name: string;

 @Column({ nullable: false, unique: true })
 email: string;

 @Column({ nullable: false })
 password: string;

}