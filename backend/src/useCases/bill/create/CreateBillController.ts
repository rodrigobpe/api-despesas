import { Request, Response } from "express";
import CreateBillUseCase from "./CreateBillUseCase";
import { HtppStatus } from "../../../httpStatus";

export default class CreateBillController{
    constructor(private readonly createBillUseCase:CreateBillUseCase){}
    async handle(req:Request,res:Response):Promise<Response>{
        const {userId} = req.params
        const {title,price,date} = req.body
        const bill = await this.createBillUseCase.execute({userId,date,price,title})
        return res.status(HtppStatus.CREATED).json({
            message:"Bill created",
            status_code:HtppStatus.CREATED,
            bill
        })
    }
}