import express from "express";

import { getBooks, createBook, updateBook, deleteBook } from "../contollers/bookController";

const router = express.Router();

router.get("/", getBooks);
router.post("/create", createBook);
router.put("/update/:id", updateBook);
router.delete('/delete/:id', deleteBook);

export default router;
