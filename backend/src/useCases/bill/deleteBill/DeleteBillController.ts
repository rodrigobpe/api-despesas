import { Request, Response } from "express";
import DeleteBillUseCase from "./DeleteBillUseCase";
import { HtppStatus } from "../../../httpStatus";

export default class DeleteBillController{
    constructor(private readonly deleteBillUseCase:DeleteBillUseCase){}
    async handle(req:Request,res:Response):Promise<Response>{
        const {userId,id} = req.params
        await this.deleteBillUseCase.execute({id,userId})
        return res.status(HtppStatus.CREATED).json({
            message:`Bill ${id} deleted`,
            status_code:HtppStatus.CREATED
        })
    }
}