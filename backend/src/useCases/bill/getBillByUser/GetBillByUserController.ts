import { Request, Response } from "express";
import GetBillByUserUseCase from "./GetBillByUserUseCase";
import { HtppStatus } from "../../../httpStatus";

export default class GetBillByUserController{
    constructor(private readonly getBillByUserUseCase:GetBillByUserUseCase){}
    async handle(req:Request,res:Response):Promise<Response>{
        const {billId} = req.params
        const bills = await this.getBillByUserUseCase.execute({billId})
        return res.status(HtppStatus.OK).json({
            bills
        })
    }
}