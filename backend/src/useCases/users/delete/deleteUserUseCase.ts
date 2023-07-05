import { User } from "../../../entities/User";
import AppError from "../../../errors/AppError";
import UserRepository from "../../../repositories/UserRepository";

export default class DeleteUserUseCase{
    constructor(private readonly useRepo:UserRepository){}
    async execute({id}:Partial<User>):Promise<void>{
        const userAlreadyExist = await this.useRepo.getById({id})
        if(!userAlreadyExist){throw new AppError(400,"User doesn't Exists")}
        await this.useRepo.delete({id})
    }
    
}