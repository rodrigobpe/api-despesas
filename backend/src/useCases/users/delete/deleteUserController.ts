import { Response, Request } from "express";
import DeleteUserUseCase from "./deleteUserUseCase";
import { HtppStatus } from "../../../httpStatus";

export default class DeleteUserController{
    constructor(private readonly deleteUserUseCase:DeleteUserUseCase){}
    async handle(req:Request,res:Response):Promise<Response>{
        const {id} = req.params
        await this.deleteUserUseCase.execute({id})
        return res.status(HtppStatus.CREATED).json({
            message: "User deleted"
        })
    }
}