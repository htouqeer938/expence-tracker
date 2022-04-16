export const DefaultResponse =
  (res) =>
  ({ message = message, statusCode = statusCode, response = {} }) => {
    return res.status(statusCode).json({
      status: {
        code: statusCode,
        message: message,
      },
      response: response,
    });
  };

import jwt from "jsonwebtoken";

export const createJWT = (payload) => {
  // const { jwt } = pkg;
  // const secrete = process.env.SECRETE_KEY;
  const secrete = "dedefefw39ru9t0g459rbvwjcbxloq";
  return jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 365,
      data: payload,
    },
    secrete
  );
};
