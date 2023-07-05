import helpers from "../../../helpers";
import { User } from "../../../entities/User";
import UserRepository from "../../../repositories/UserRepository";
import CreateUserDTO from "./createUserDTO";
import AppError from "../../../errors/AppError";
import { HtppStatus } from "../../../httpStatus";

export default class CreateUserUseCase{
    constructor(private readonly userRepo:UserRepository){}
    async execute({email,isAdmin,name,password}:CreateUserDTO):Promise<User> {
        const userAlreadyExist = await this.userRepo.getByEmail({email})
        if(userAlreadyExist){throw new AppError(HtppStatus.NOT_FOUND, 'User already exists')}
        const user = await this.userRepo.create({email,name,isAdmin:false,password:await helpers.hashPassword(password)})
        return user
    }
}