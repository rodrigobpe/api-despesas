import { User } from "../../../entities/User";
import AppError from "../../../errors/AppError";
import { HtppStatus } from "../../../httpStatus";
import UserRepository from "../../../repositories/UserRepository";

export default class DeleteUserUseCase{
    constructor(private readonly useRepo:UserRepository){}
    async execute({id}:Partial<User>):Promise<void>{
        const userAlreadyExist = await this.useRepo.getById({id})
        if(!userAlreadyExist){throw new AppError(HtppStatus.NOT_FOUND,"User doesn't Exists")}
        await this.useRepo.delete({id})
    }
    
}