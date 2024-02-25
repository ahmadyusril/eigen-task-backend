import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne,

} from "typeorm"
import { Member } from "./Member"

@Entity({ name: "book" })
export class Book {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    code: string

    @Column()
    title: string

    @Column()
    author: string

    @Column()
    stock: number

    @CreateDateColumn({ type: "timestamp with time zone" })
    createdAt: Date

    @UpdateDateColumn({ type: "timestamp with time zone" })
    updatedAt: Date

    @ManyToOne(() => Member, (member) => member.book, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    })
    member: Member[]
}