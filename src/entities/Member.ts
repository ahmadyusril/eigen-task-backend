import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne,

} from "typeorm"
import { Book } from "./Book"

@Entity({ name: "member" })
export class Member {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    code: string

    @Column()
    name: string

    @CreateDateColumn({ type: "timestamp with time zone" })
    createdAt: Date

    @UpdateDateColumn({ type: "timestamp with time zone" })
    updatedAt: Date

    @OneToMany(() => Book, (book) => book.member, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    book: Book[]
}
