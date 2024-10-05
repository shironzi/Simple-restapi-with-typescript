import { Request, Response, NextFunction } from "express";
import Book from "../models/Book";
import { BookResponse, ErrorResponse } from "../interfaces/BookResponse";

export const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const books = await Book.findAll();

    // if (books.length === 0 ) {
    //   res.status(404).json({
    //     message: "No book is available",
    //   });
    //   return
    // }

    res.status(200).json({
      books,
    });
  } catch (error) {
    console.error("Unexpected occurred during getBooks: ", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const createBook = async (
  req: Request,
  res: Response<BookResponse | ErrorResponse>,
  next: NextFunction
) => {
  try {
    const { title, author, description } = req.body;

    if (!title || !author || !description) {
      res.status(400).json({
        message: "Incomplete form. 'title', 'author', and 'description' are required.",
      });
      return;
    }

    const book = await Book.create({
      title,
      author,
      description,
    });

    book.save();

    res.status(201).json({
      message: "Successfully created a book", // Optionally include the created book
      book: book
    });

  } catch (error) {
    console.error("Unexpected error during createBook: ", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};