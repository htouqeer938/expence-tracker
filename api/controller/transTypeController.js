import pool from "../db.js";
import { DefaultResponse } from "../helpers/helpers.js";

export const getTransTypes = async (req, res) => {
  try {
    const qry = `select * from transaction_type`;
    const data = await pool.query(qry);
    const result = data.rows;
    return DefaultResponse(res)({
      message: "Values selected",
      statusCode: 200,
      response: { result },
    });
  } catch (error) {
    return DefaultResponse(res)({
      message: error.message,
      statusCode: 400,
      response: {},
    });
  }
};
