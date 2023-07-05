import Bill from "../../../entities/Bill";
import AppError from "../../../errors/AppError";
import { HtppStatus } from "../../../httpStatus";
import BillRepository from "../../../repositories/BillRepository";
import GetBillByUserDTO from "./GetBillByUserDTO";

export default class GetBillByUserUseCase{
    constructor(private readonly billRepo:BillRepository){}
    async execute({userId}:GetBillByUserDTO):Promise<Bill[] | unknown[]>{
        const bills = await this.billRepo.getByUser({userId})
        if(bills.length === 0)throw new AppError(HtppStatus.NOT_FOUND,"User doesn't exists")
        return bills
    }
}