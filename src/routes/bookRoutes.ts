import express from "express";

import { getBooks, createBook, updateBook } from "../contollers/bookController";

const router = express.Router();

router.get("/", getBooks);
router.post("/create", createBook);
router.put("/update/:id", updateBook);

export default router;
