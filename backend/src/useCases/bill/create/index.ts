import BillRepoPrisma from "../../../repositories/implementation/BillRepoPrisma";
import CreateBillController from "./CreateBillController";
import CreateBillUseCase from "./CreateBillUseCase";

const billRepo = new BillRepoPrisma()
const createBillUseCase = new CreateBillUseCase(billRepo)
export const createBillController = new CreateBillController(createBillUseCase)