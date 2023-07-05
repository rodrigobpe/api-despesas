import UserRepoPrisma from "../../../repositories/implementation/UserRepoPrisma";
import GetAllUsersUserCase from "./getAllUsersUseCase";
import GetAllUsersController from "./getAllUsersController";

const userPrismaRepo = new UserRepoPrisma()
const getAllUsersUserCase = new GetAllUsersUserCase(userPrismaRepo)
export const getAllUsersController = new GetAllUsersController(getAllUsersUserCase) 