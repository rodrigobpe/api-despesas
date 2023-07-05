import { Request, Response } from "express";
import CreateUserUseCase from "./createUserUseCase";
import CreateUserDTO from "../createUser/createUserDTO";
import { HtppStatus } from "../../../httpStatus";

export default class CreateUserController{
    constructor(private readonly createUserUseCase:CreateUserUseCase){}
    async handle(req:Request,res:Response):Promise<Response>{
        const {email,name,password}:CreateUserDTO = req.body;
        const userResponse = await this.createUserUseCase.execute({email,name,password});
        const {password:_, ...user} = userResponse

        return res.status(HtppStatus.CREATED).json({
            message:"User created",
            status_code:HtppStatus.CREATED,
            user
        })
    }
}