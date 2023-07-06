import BillRepoPrisma from "../../../repositories/implementation/BillRepoPrisma";
import UserRepoPrisma from "../../../repositories/implementation/UserRepoPrisma";
import DeleteBillController from "./DeleteBillController";
import DeleteBillUseCase from "./DeleteBillUseCase";

const billRepo = new BillRepoPrisma()
const userRepo = new UserRepoPrisma()
const deleteBillUseCase = new DeleteBillUseCase(billRepo,userRepo)
export const deleteBillController = new DeleteBillController(deleteBillUseCase)