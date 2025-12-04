import { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
  static async profile(req: Request, res: Response) {
    try {
      const userId = (req.user as any).id;

      const user = await UserService.getProfile(userId);

      res.json({ success: true, user });
    } catch (error) {
      res.status(400).json({ message: error, success: false });
    }
  }
}
