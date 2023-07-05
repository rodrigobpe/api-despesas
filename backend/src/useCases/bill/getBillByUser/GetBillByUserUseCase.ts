import Bill from "../../../entities/Bill";
import AppError from "../../../errors/AppError";
import { HtppStatus } from "../../../httpStatus";
import BillRepository from "../../../repositories/BillRepository";
import GetBillByUserDTO from "./GetBillByUserDTO";

export default class GetBillByUserUseCase{
    constructor(private readonly billRepo:BillRepository){}
    async execute({billId}:GetBillByUserDTO):Promise<Bill[] | unknown[]>{
        const bills = await this.billRepo.getByUser({billId})
        if(bills.length === 0)throw new AppError(HtppStatus.BAD_REQUEST,"Usuário sem contas")
        return bills
    }
}