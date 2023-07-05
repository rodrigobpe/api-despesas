import { Request, Response } from "express";
import GetBillByUserUseCase from "./GetBillByUserUseCase";
import { HtppStatus } from "../../../httpStatus";
import AppError from "../../../errors/AppError";

export default class GetBillByUserController{
    constructor(private readonly getBillByUserUseCase:GetBillByUserUseCase){}
    async handle(req:Request,res:Response):Promise<Response>{
        const {userId} = req.params
        const bills = await this.getBillByUserUseCase.execute({userId})
        return res.status(HtppStatus.OK).json({
            status_code:HtppStatus.OK,
            bills
        })
    }
}