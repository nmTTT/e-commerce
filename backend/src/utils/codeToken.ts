import jwt from "jsonwebtoken";

const TOKENPASS = process.env.TOKENPASS || "";

export const generateToken = (payload: {}) => {
  return jwt.sign(payload, TOKENPASS, {
    expiresIn: "1h",
  });
};
