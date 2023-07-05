import BillRepoPrisma from "../../../repositories/implementation/BillRepoPrisma";
import GetBillByUserController from "./GetBillByUserController";
import GetBillByUserUseCase from "./GetBillByUserUseCase";

const billRepo = new BillRepoPrisma()
const getBillByUserUseCase = new GetBillByUserUseCase(billRepo)
export const getBillByUserController = new GetBillByUserController(getBillByUserUseCase)