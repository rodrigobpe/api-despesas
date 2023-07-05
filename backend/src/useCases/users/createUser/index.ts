import UserRepoPrisma from "../../../repositories/implementation/UserRepoPrisma";
import CreateUserUseCase from "./createUserUseCase";
import CreateUserController from "./createUserController";

const userPrismaRepo = new UserRepoPrisma()
const createUserUseCase = new CreateUserUseCase(userPrismaRepo)
export const createUserController = new CreateUserController(createUserUseCase) 