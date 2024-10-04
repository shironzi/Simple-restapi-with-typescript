import express from "express";

import { getBooks } from "../contollers/bookController";

const router = express.Router();

router.get("/", getBooks);

export default router;
