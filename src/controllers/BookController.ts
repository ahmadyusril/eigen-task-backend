import { Request, Response } from 'express';
import BookService from '../services/BookService';

export default new class BookController {
    getBooks(req: Request, res: Response) {
        BookService.getBooks(req, res);
    }

    createBook(req: Request, res: Response) {
        BookService.createBook(req, res);
    }
}