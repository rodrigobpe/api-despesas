import { Request, Response } from "express";
import CreateBillUseCase from "./CreateBillUseCase";

export default class CreateBillController{
    constructor(private readonly createBillUseCase:CreateBillUseCase){}
    async handle(req:Request,res:Response):Promise<Response>{
        const {billId,title,price,date} = req.body
        const bill = await this.createBillUseCase.execute({billId,date,price,title})
        return res.status(201).json({
            message:"Bill created",
            bill
        })
    }
}