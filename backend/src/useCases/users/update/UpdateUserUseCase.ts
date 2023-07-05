import { User } from "../../../entities/User";
import AppError from "../../../errors/AppError";
import { HtppStatus } from "../../../httpStatus";
import UserRepository from "../../../repositories/UserRepository";
import UpdateUserDTO from "./UpdateUserDTO";

export default class UpdateUserUseCase{
    constructor(private readonly userRepo:UserRepository){}
    async execute({id,isAdmin,name,password}:UpdateUserDTO):Promise<User>{
        const userExists = await this.userRepo.getById({id})
        if(!userExists)throw new AppError(HtppStatus.NOT_FOUND,"User doesn't exists");

        return await this.userRepo.update({id,isAdmin,name,password})
    }
}