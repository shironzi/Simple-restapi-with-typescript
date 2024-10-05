import express from "express";

import { getBooks, createBook } from "../contollers/bookController";

const router = express.Router();

router.get("/", getBooks);
router.post("/create", createBook );

export default router;
