import { Router } from 'express';
import BookController from '../controllers/BookController';

const BookRouter = Router();

BookRouter.post("/book", BookController.createBook);
BookRouter.get("/books", BookController.getBooks);

export default BookRouter;
