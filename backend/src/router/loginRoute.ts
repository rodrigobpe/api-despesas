import { Request, Response, Router } from "express";
import { loginController } from "../useCases/login";

export const loginRouter = Router()

loginRouter.use("/",(req:Request,res:Response) => (loginController.handle(req,res)))
