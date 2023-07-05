import { Request, Response } from "express";
import GetAllUsersUseCase from "./getAllUsersUseCase";
import { HtppStatus } from "../../../httpStatus";

export default class GetAllUsersController{
    constructor(private readonly getAllUsersUseCase:GetAllUsersUseCase){}
    async handle(req:Request,res:Response):Promise<Response>{
        const users = await this.getAllUsersUseCase.execute()
        return res.json({
            status_code:HtppStatus.OK,
            users
        })
    }
}