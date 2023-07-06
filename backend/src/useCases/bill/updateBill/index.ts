import BillRepoPrisma from "../../../repositories/implementation/BillRepoPrisma";
import UserRepoPrisma from "../../../repositories/implementation/UserRepoPrisma";
import UpdateBillController from "./UpdateBillController";
import UpdateBillUseCase from "./UpdateBillUseCase";

const billRepo = new BillRepoPrisma()
const userRepo = new UserRepoPrisma()
const updateBillUseCase = new UpdateBillUseCase(billRepo,userRepo)
export const updateBillController = new UpdateBillController(updateBillUseCase)