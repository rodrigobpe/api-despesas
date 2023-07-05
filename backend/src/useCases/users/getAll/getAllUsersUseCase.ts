import { User } from "../../../entities/User";
import AppError from "../../../errors/AppError";
import { HtppStatus } from "../../../httpStatus";
import UserRepository from "../../../repositories/UserRepository";

export default class GetAllUsersUseCase{
    constructor(private readonly userRepo:UserRepository){}
    async execute():Promise<Partial<User>[] | null>{
        const users = await this.userRepo.getAll()
        if(users?.length === 0){throw new AppError(HtppStatus.NOT_FOUND,"There are no users")}
        return users
    }
}