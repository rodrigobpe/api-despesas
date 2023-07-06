import { Response,Request } from "express";
import UpdateBillUseCase from "./UpdateBillUseCase";
import AppError from "../../../errors/AppError";
import { HtppStatus } from "../../../httpStatus";

export default class UpdateBillController{
    constructor(private readonly updateUseCase:UpdateBillUseCase){}
    async handle(req:Request,res:Response):Promise<Response>{
        const {id,userId} = req.params
        const {price,title,date} = req.body

        if(price === undefined && title === undefined && date === undefined)throw new AppError(HtppStatus.BAD_REQUEST,"Body invalid")

        const bill = await this.updateUseCase.execute({id,userId,date,price,title})
        return res.status(HtppStatus.CREATED).json({
            message:"Bill updated",
            status_code:HtppStatus.CREATED,
            bill
        })
    }
}