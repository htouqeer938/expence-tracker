// const Pool = require("pg").Pool;
import Pool from "pg-pool";

const pool = new Pool({
  user: "postgres",
  password: "123456",
  database: "expense_tracker",
  host: "localhost",
  port: 5432,
});

export default pool;
