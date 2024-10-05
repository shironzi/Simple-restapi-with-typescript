import Book from '../models/Book';

export interface BookResponse {
  books: any;
  book: Book;
}

export interface ErrorResponse {
  message: string;
}
