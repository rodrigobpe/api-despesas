import { Response, Request } from "express";
import DeleteUserUseCase from "./deleteUserUseCase";

export default class DeleteUserController{
    constructor(private readonly deleteUserUseCase:DeleteUserUseCase){}
    async handle(req:Request,res:Response):Promise<Response>{
        const {id} = req.params
        await this.deleteUserUseCase.execute({id})
        return res.status(201).json({
            message: "User deleted"
        })
    }
}