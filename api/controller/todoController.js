import pool from '../db.js';

export const createTodo = async (req, res) => {
      try {
            const { description } = req.body;
            const newTodo = await pool.query('INSERT INTO todo (description) VALUES ($1) RETURNING *', [description]);
            // const newTodo = await pool.query(`INSERT INTO todo (description) VALUES ('${description}')`)
            // console.log(req.body);
            res.json(newTodo.rows[0])
      } catch (error) {
            console.log(error.message);
            res.json(error)
      }
};

export const getAllTodo = async (req, res) => {
      try {
            const allTodos = await pool.query('SELECT * FROM todo');
            res.json(allTodos.rows);
      } catch (error) {
            console.log(error.message);
            res.json(error)
      }
};

export const getOneTodo = async (req, res) => {
      try {
            const { id } = req.params;
            const oneTodo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id]);
            res.json(oneTodo.rows);
      } catch (error) {
            console.log(error.message);
            res.json(error)
      }
};

export const updateTodo = async (req, res) => {
      try {
            const { description } = req.body;
            const { id } = req.params;
            const updateTodo = await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2', [description, id]);
            res.json('Todo Updated!')
      } catch (error) {
            console.log(error.message);
            res.json(error)
      }
};

export const deleteTodo = async (req, res) => {
      try {
            const { id } = req.params;
            const deleteTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);
            res.json('Todo deleted!')
      } catch (error) {
            console.log(error.message);
            res.json(error)
      }
};