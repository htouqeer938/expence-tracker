import pool from '../db.js';
import { DefaultResponse } from '../helpers/helpers.js';

export const createTransaction = async (req, res) => {
      try {
            const { transaction_type_id, transaction_type, transaction_name, transaction_desc, transaction_amount, transaction_date, user_id } = req.body;
            const qry = `INSERT INTO transactions (transaction_type_id, transaction_type, transaction_name, transaction_desc, transaction_amount, transaction_date, user_id)
                  VALUES ('${transaction_type_id}', '${transaction_type}', '${transaction_name}', '${transaction_desc}', '${transaction_amount}', '${transaction_date}', '${user_id}');`;
            const data = await pool.query(qry);
            const result = data.rows[0];
            return DefaultResponse(res)({
                  message: 'Successfully',
                  statusCode: 200,
                  response: { result }
            });
      } catch (error) {
            return DefaultResponse(res)({
                  message: error.message,
                  statusCode: 400,
                  response: {}
            });
      }
}