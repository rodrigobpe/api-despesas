import Bill from "../../../entities/Bill";
import AppError from "../../../errors/AppError";
import { HtppStatus } from "../../../httpStatus";
import BillRepository from "../../../repositories/BillRepository";
import UserRepository from "../../../repositories/UserRepository";
import CreateBillDTO from "./CreateBillDTO";

export default class CreateBillUseCase{
    constructor(private readonly billRepo:BillRepository,private readonly userRepo:UserRepository){}
    async execute({date,price,userId,title}:CreateBillDTO):Promise<Bill | unknown>{
        const userExist = await this.userRepo.getById({id:userId})
        if(!userExist)throw new AppError(HtppStatus.NOT_FOUND,"User doesn't exists")
        return await this.billRepo.create({userId,date,price,title})
    }
}