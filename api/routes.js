import express from "express";

import {
      createTodo,
      getAllTodo,
      getOneTodo,
      updateTodo,
      deleteTodo
} from "./controller/todoController.js";

const router = express.Router();

// Todo Routes
router.post("/create_todo", createTodo);
router.get("/get_todo", getAllTodo);
router.get("/get_todo/:id", getOneTodo);
router.put("/update_todo/:id", updateTodo);
router.delete("/delete_todo/:id", deleteTodo);

export default router;