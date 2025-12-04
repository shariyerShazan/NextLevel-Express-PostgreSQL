import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token)
      return res.status(401).json({ message: "Unauthorized", success: false });

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded; // attaching user data

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token", success: false });
  }
};
