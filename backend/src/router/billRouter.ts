import { Request, Response, Router } from "express";
import {createBillController  } from '../useCases/bill/create'

export const billRouter = Router()

billRouter.post('/',(req:Request,res:Response) =>(createBillController.handle(req,res)))
