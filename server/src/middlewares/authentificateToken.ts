import { Request, Response, NextFunction } from "express";
import { ACCESS_TOKEN_SECRET } from "../config/defaultUserSettings";
import IUser from "../types/userType";
const jwt = require("jsonwebtoken");

export default function authentificateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    const response = { error: true, statusCode: 401, message: "Unathorized" };
    return res.sendStatus(response.statusCode).end(response);
  }
  jwt.verify(
    token,
    ACCESS_TOKEN_SECRET,
    (
      err: Error,
      user: {
        id: string;
        role: string;
        user: string;
        avatar: string;
        iat: number;
      }
    ) => {
      if (err) {
        const response = { error: true, statusCode: 403, message: "Forbidden" };
        return res.sendStatus(response.statusCode).end(response);
      }
      next();
    }
  );
}
