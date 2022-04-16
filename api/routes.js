import express from "express";
const router = express.Router();

import {
  createTodo,
  getAllTodo,
  getOneTodo,
  updateTodo,
  deleteTodo,
} from "./controller/todoController.js";

import { getTransTypes } from "./controller/transTypeController.js";

import { register, login } from "./controller/authController.js";

import {
  createTransaction,
  getTransaction,
} from "./controller/transactionsController.js";

// Todo Routes
router.post("/create_todo", createTodo);
router.get("/get_todo", getAllTodo);
router.get("/get_todo/:id", getOneTodo);
router.put("/update_todo/:id", updateTodo);
router.delete("/delete_todo/:id", deleteTodo);

// Transaction Types Routes
router.get("/get_trans_types", getTransTypes);

//Auth Routes
router.post("/add_user", register);
router.post("/login", login);

// Transaction Routes
router.post("/create_transaction", createTransaction);
router.get("/get_transaction/:user_id", getTransaction);

export default router;
