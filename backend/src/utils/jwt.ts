import jwt from "jsonwebtoken";

const TOKEN_PASS = process.env.TOKEN_PASS || "";

export const generateToken = (payload: object) => {
  return jwt.sign(payload, TOKEN_PASS, {
    expiresIn: "1h",
  });
};
export const decodeToken = (token: string) => {
  return jwt.verify(token, TOKEN_PASS);
};
