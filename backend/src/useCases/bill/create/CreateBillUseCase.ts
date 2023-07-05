import Bill from "../../../entities/Bill";
import BillRepository from "../../../repositories/BillRepository";
import CreateBillDTO from "./CreateBillDTO";

export default class CreateBillUseCase{
    constructor(private readonly billRepo:BillRepository){}
    async execute({date,price,userId,title}:CreateBillDTO):Promise<Bill | unknown>{
        return await this.billRepo.create({userId,date,price,title})
    }
}