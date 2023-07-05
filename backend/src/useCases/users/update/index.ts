import UserRepoPrisma from "../../../repositories/implementation/UserRepoPrisma";
import UpdateUserUseCase from "./UpdateUserUseCase";
import UpdateUserController from "./UpdateUserController";

const userPrismaRepo = new UserRepoPrisma()
const updateUserUseCase = new UpdateUserUseCase(userPrismaRepo)
export const updateUserController = new UpdateUserController(updateUserUseCase) 