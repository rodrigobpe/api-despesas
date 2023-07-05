import { Router,Request,Response } from "express";
import { getBillByUserController } from "../useCases/bill/getBillByUser";
import { createBillController } from "../useCases/bill/create";

export const billRouter = Router()

billRouter.get("/:userId/bills",(req:Request,res:Response)=> (getBillByUserController.handle(req,res)))
billRouter.post("/:userId/bills",(req:Request,res:Response)=> (createBillController.handle(req,res)))