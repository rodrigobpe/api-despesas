import { Request, Response } from "express";
import UpdateUserUseCase from "./UpdateUserUseCase";
import { HtppStatus } from "../../../httpStatus";

export default class UpdateUserController{
    constructor(private readonly updateUserUseCase:UpdateUserUseCase){}
    async handle(req:Request,res:Response):Promise<Response>{
        const {id} = req.params
        const {isAdmin,password,name} = req.body
        const updateUser = await this.updateUserUseCase.execute({id,isAdmin,name,password})
        const {password:_, ...user} = updateUser

        return res.status(HtppStatus.CREATED).json({
            message:"User updated",
            user
        })
    }
}