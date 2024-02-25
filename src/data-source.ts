import "reflect-metadata"
import { DataSource } from "typeorm"
import { Member } from "./entities/Member"
import { Book } from "./entities/Book"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "177013",
    database: "eigenlibrary",
    synchronize: true,
    logging: false,
    entities: [Member, Book],
    migrations: [],
    subscribers: [],
})
