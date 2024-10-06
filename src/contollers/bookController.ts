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
        message:
          "Incomplete form. 'title', 'author', and 'description' are required.",
      });
      return;
    }

    const book = await Book.create({
      title,
      author,
      description,
    });

    await book.save();

    res.status(201).json({
      message: "Successfully created a book",
      book: book,
    });
  } catch (error) {
    console.error("Unexpected error during createBook: ", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const updateBook = async (
  req: Request,
  res: Response<BookResponse | ErrorResponse>,
  next: NextFunction
) => {
  try {
    const {id} = req.params;

    const book = await Book.findByPk(id);

    if(!book){
      return res.status(404).json({
        message: `Book with id ${id} not found.`,
      })
    }

    const { title, author, description } = req.body;

    if (!title || !author || !description) {
      res.status(404).json({
        message:
          "'title', 'author', and 'description' are required.",
      });
      return;
    }

    book.title = title;
    book.author = author;
    book.description = description;

    await book.save();

    res.status(200).json({
      message: "Book was updated successfully",
      book: book,
    }).end();
    
  } catch (error) {
    console.error("unexpected occurred during updateBook: ", error);
  }
};
