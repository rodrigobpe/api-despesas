import { Request, Response, Router } from "express";
import { createUserController } from "../useCases/users/createUser";
import { getAllUsersController } from "../useCases/users/getAll";
import { deleteUserController } from "../useCases/users/delete";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { updateUserController } from "../useCases/users/update";

export const userRoute = Router()

userRoute.post('/', (req: Request, res: Response) => ( createUserController.handle(req, res)))
userRoute.use(isAuthenticated)
userRoute.get('/', (req: Request, res: Response) => ( getAllUsersController.handle(req, res)))
userRoute.delete('/:id', (req: Request, res: Response) => ( deleteUserController.handle(req, res)))
userRoute.patch('/:id', (req: Request, res: Response) => ( updateUserController.handle(req, res)))
