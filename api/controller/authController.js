import pool from '../db.js';
import { DefaultResponse, createJWT } from '../helpers/helpers.js';
import md5 from 'md5'

export const login = async (req, res) => {
      try {
            const { email, password } = req.body;
            const match_password = md5(password)
            const qry = `SELECT user_id, first_name, last_name, email  FROM users WHERE email = '${email}' AND password = '${match_password}'`;
            const data = await pool.query(qry)
            const result = data.rows
            if (result.length > 0) {
                  let token = createJWT(result);
                  const token_qry = `UPDATE users SET token = '${token}' WHERE email = '${email}' AND password = '${match_password}'`;
                  const token_data = await pool.query(token_qry);
                  return DefaultResponse(res)({
                        message: 'Successfully',
                        statusCode: 200,
                        response: { detail: result, token }
                  });
            } else {
                  return DefaultResponse(res)({
                        message: "Invalid credentials. Please try again!",
                        statusCode: 401,
                        response: {}
                  });
            }
      } catch (error) {
            console.log(error);
            return DefaultResponse(res)({
                  message: error.message,
                  statusCode: 400,
                  response: {}
            });
      }
};

export const register = async (req, res) => {
      try {
            const { first_name, last_name, email, password } = req.body;
            const encrypt_password = md5(password)
            const qry = `INSERT INTO users (first_name, last_name, email, password)
                  VALUES ('${first_name}','${last_name}','${email}','${encrypt_password}')`;
            const data = await pool.query(qry);
            const result = data.rows[0]
            return DefaultResponse(res)({
                  message: 'User created successfully!',
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