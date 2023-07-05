import BillRepoPrisma from "../../../repositories/implementation/BillRepoPrisma";
import UserRepoPrisma from "../../../repositories/implementation/UserRepoPrisma";
import GetBillByUserController from "./GetBillByUserController";
import GetBillByUserUseCase from "./GetBillByUserUseCase";

const billRepo = new BillRepoPrisma()
const userRepo = new UserRepoPrisma()
const getBillByUserUseCase = new GetBillByUserUseCase(billRepo,userRepo)
export const getBillByUserController = new GetBillByUserController(getBillByUserUseCase)