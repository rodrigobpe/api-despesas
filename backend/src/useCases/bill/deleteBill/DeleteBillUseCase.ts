import AppError from "../../../errors/AppError";
import { HtppStatus } from "../../../httpStatus";
import BillRepository from "../../../repositories/BillRepository";
import UserRepository from "../../../repositories/UserRepository";
import DeleteBillDTO from "./DeleteBillDTO";

export default class DeleteBillUseCase{
    constructor(private readonly billRepo:BillRepository,private readonly userRepo:UserRepository){}
    async execute({id,userId}:DeleteBillDTO):Promise<void>{
        const userExist = await this.userRepo.getById({id:userId})
        if(!userExist)throw new AppError(HtppStatus.NOT_FOUND,"User doesn't exists")
        
        const billExist = await this.billRepo.getByID({id})
        if(!billExist)throw new AppError(HtppStatus.NOT_FOUND,"Bill doesn't exists")

        await this.billRepo.delete({id})
    }
}