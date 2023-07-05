import UserRepoPrisma from "../../repositories/implementation/UserRepoPrisma";
import LoginUseCase from "./loginUseCase";
import LoginController from "./loginController";

const userPrismaRepo = new UserRepoPrisma()
const loginUseCase = new LoginUseCase(userPrismaRepo)
export const loginController = new LoginController(loginUseCase) 