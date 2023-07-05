import { Request, Response } from "express";
import UpdateUserUseCase from "./UpdateUserUseCase";
import { HtppStatus } from "../../../httpStatus";
import AppError from "../../../errors/AppError";

export default class UpdateUserController{
    constructor(private readonly updateUserUseCase:UpdateUserUseCase){}
    async handle(req:Request,res:Response):Promise<Response>{
        const {id} = req.params
        const {isAdmin,password,name} = req.body
        if(isAdmin === undefined && password === undefined && name === undefined)throw new AppError(HtppStatus.BAD_REQUEST,"Body invalid")
        
        const updateUser = await this.updateUserUseCase.execute({id,isAdmin,name,password})
        const {password:_, ...user} = updateUser

        return res.status(HtppStatus.CREATED).json({
            message:"User updated",
            status_code:HtppStatus.CREATED,
            user
        })
    }
}