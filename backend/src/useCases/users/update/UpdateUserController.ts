import { Request, Response } from "express";
import UpdateUserUseCase from "./UpdateUserUseCase";

export default class UpdateUserController{
    constructor(private readonly updateUserUseCase:UpdateUserUseCase){}
    async handle(req:Request,res:Response):Promise<Response>{
        const {id} = req.params
        const {isAdmin,password,name} = req.body
        const updateUser = await this.updateUserUseCase.execute({id,isAdmin,name,password})
        const {password:_, ...user} = updateUser

        return res.status(201).json({
            message:"User updated",
            user
        })
    }
}