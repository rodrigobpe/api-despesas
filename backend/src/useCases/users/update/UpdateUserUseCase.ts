import { User } from "../../../entities/User";
import AppError from "../../../errors/AppError";
import UserRepository from "../../../repositories/UserRepository";
import UpdateUserDTO from "./UpdateUserDTO";

export default class UpdateUserUseCase{
    constructor(private readonly userRepo:UserRepository){}
    async execute({id,isAdmin,name,password}:UpdateUserDTO):Promise<User>{
        const userExists = await this.userRepo.getById({id})
        if(!userExists)throw new AppError(400,"User doesn't exists");

        return await this.userRepo.update({id,isAdmin,name,password})
    }
}