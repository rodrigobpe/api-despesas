import { Request, Response } from "express";
import CreateBillUseCase from "./CreateBillUseCase";
import { HtppStatus } from "../../../httpStatus";
import AppError from "../../../errors/AppError";

export default class CreateBillController{
    constructor(private readonly createBillUseCase:CreateBillUseCase){}
    async handle(req:Request,res:Response):Promise<Response>{
        const {userId} = req.params
        const {title,price,date} = req.body
        if(!title || !price || !date)throw new AppError(HtppStatus.BAD_REQUEST,"Body invalid")
        const bill = await this.createBillUseCase.execute({userId,date,price,title})
        return res.status(HtppStatus.CREATED).json({
            message:"Bill created",
            status_code:HtppStatus.CREATED,
            bill
        })
    }
}