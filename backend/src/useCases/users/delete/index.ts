import UserRepoPrisma from "../../../repositories/implementation/UserRepoPrisma";
import DeleteUserUseCase from "./deleteUserUseCase";
import DeleteUserController from "./deleteUserController";


const userPrismaRepo = new UserRepoPrisma()
const deleteUserUseCase = new DeleteUserUseCase(userPrismaRepo)
export const deleteUserController = new DeleteUserController(deleteUserUseCase) 