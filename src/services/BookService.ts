import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Book } from "../entities/Book";
import { Request, Response } from "express";

export default new class MemberService {
    private readonly BookRepository: Repository<Book> =
        AppDataSource.getRepository(Book);

    async getBooks(req: Request, res: Response): Promise<Response> {
        try {
            const book = await this.BookRepository.find();

            return res.status(201).json({
                status: "success",
                message: "Find books successfully",
                data: book
            })

        } catch (error) {
            return res.status(500).json({
                status: "fail",
                message: error
            })
        }

    }

    async createBook(req: Request, res: Response): Promise<Response> {
        try {
            const { code, title, author, stock } = req.body;

            const book = new Book();

            book.code = code;
            book.title = title;
            book.author = author;
            book.stock = stock;

            console.log(book);

            await this.BookRepository.save(book)

            return res.status(201).json({
                status: "Success",
                message: "Create book successfully",
                data: book
            })

        } catch (error) {
            return res.status(500).json({
                status: "fail",
                message: error
            })
        }
    }
}