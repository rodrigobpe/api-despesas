import { Request, Response, Router } from "express";
import { createUserController } from "../useCases/users/createUser";
import { getAllUsersController } from "../useCases/users/getAll";
import { deleteUserController } from "../useCases/users/delete";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { updateUserController } from "../useCases/users/update";
import { getBillByUserController } from "../useCases/bill/getBillByUser";
import { createBillController } from "../useCases/bill/create";

export const userRoute = Router()

userRoute.post('/', (req: Request, res: Response) => ( createUserController.handle(req, res)))
userRoute.use(isAuthenticated)
userRoute.get('/', (req: Request, res: Response) => ( getAllUsersController.handle(req, res)))
userRoute.delete('/:id', (req: Request, res: Response) => ( deleteUserController.handle(req, res)))
userRoute.patch('/:id', (req: Request, res: Response) => ( updateUserController.handle(req, res)))
userRoute.get('/:userId/bills',(req:Request,res:Response)=> (getBillByUserController.handle(req,res)))
userRoute.post('/:userId/bills',(req:Request,res:Response)=> (createBillController.handle(req,res)))
