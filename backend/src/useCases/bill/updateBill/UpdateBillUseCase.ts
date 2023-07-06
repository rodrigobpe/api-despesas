import Bill from "../../../entities/Bill";
import AppError from "../../../errors/AppError";
import { HtppStatus } from "../../../httpStatus";
import BillRepository from "../../../repositories/BillRepository";
import UserRepository from "../../../repositories/UserRepository";
import UpdateBillDTO from "./UpdateBillDTO";

export default class UpdateBillUseCase{
    constructor(private readonly billRepo:BillRepository,private readonly userRepo:UserRepository){}
    async execute({id,userId,date,price,title}:UpdateBillDTO):Promise<Bill | unknown>{
        const userExist = await this.userRepo.getById({id:userId})
        if(!userExist)throw new AppError(HtppStatus.NOT_FOUND,"User doesn't exists")

        const billExist = await this.billRepo.getByID({id})
        if(!billExist)throw new AppError(HtppStatus.NOT_FOUND,"Bill doesn't exists")

        return await this.billRepo.update({date,id,price,title,userId})
    }
}