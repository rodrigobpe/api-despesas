import { Request, Response, Router } from "express";
import {createBillController  } from '../useCases/bill/create'
import { getBillByUserController } from "../useCases/bill/getBillByUser";

export const billRouter = Router()

billRouter.post('/',(req:Request,res:Response) =>(createBillController.handle(req,res)))
billRouter.get('/:billId/user',(req:Request,res:Response) =>(getBillByUserController.handle(req,res)))
