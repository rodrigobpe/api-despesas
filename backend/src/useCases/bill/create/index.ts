import BillRepoPrisma from "../../../repositories/implementation/BillRepoPrisma";
import UserRepoPrisma from "../../../repositories/implementation/UserRepoPrisma";
import CreateBillController from "./CreateBillController";
import CreateBillUseCase from "./CreateBillUseCase";

const billRepo = new BillRepoPrisma()
const userRepo = new UserRepoPrisma()
const createBillUseCase = new CreateBillUseCase(billRepo,userRepo)
export const createBillController = new CreateBillController(createBillUseCase)