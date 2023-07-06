import { Router,Request,Response } from "express";
import { getBillByUserController } from "../useCases/bill/getBillByUser";
import { createBillController } from "../useCases/bill/create";
import { updateBillController } from "../useCases/bill/updateBill";
import { deleteBillController } from "../useCases/bill/deleteBill";

export const billRouter = Router()

billRouter.get("/:userId/bills",(req:Request,res:Response)=> (getBillByUserController.handle(req,res)))
billRouter.post("/:userId/bills",(req:Request,res:Response)=> (createBillController.handle(req,res)))
billRouter.patch("/:userId/bills/:id",(req:Request,res:Response)=> (updateBillController.handle(req,res)))
billRouter.delete("/:userId/bills/:id",(req:Request,res:Response)=> (deleteBillController.handle(req,res)))