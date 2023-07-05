import Bill from "../../../entities/Bill";
import AppError from "../../../errors/AppError";
import { HtppStatus } from "../../../httpStatus";
import BillRepository from "../../../repositories/BillRepository";
import UserRepository from "../../../repositories/UserRepository";
import GetBillByUserDTO from "./GetBillByUserDTO";

export default class GetBillByUserUseCase{
    constructor(private readonly billRepo:BillRepository,private readonly userRepo:UserRepository){}
    async execute({userId}:GetBillByUserDTO):Promise<Bill[] | unknown[]>{
        const userExist = await this.userRepo.getById({id:userId})
        if(!userExist)throw new AppError(HtppStatus.NOT_FOUND,"User doesn't exists")
        const bills = await this.billRepo.getByUser({userId})
        if(bills.length === 0)throw new AppError(HtppStatus.NOT_FOUND,"This user hasn't bills to pay")
        return bills
    }
}