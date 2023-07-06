import { Request, Response } from "express";
import CreateUserUseCase from "./createUserUseCase";
import CreateUserDTO from "../createUser/createUserDTO";
import { HtppStatus } from "../../../httpStatus";
import AppError from "../../../errors/AppError";

export default class CreateUserController{
    constructor(private readonly createUserUseCase:CreateUserUseCase){}
    async handle(req:Request,res:Response):Promise<Response>{
        const {email,name,password}:CreateUserDTO = req.body;
        if(!email || !name || !password)throw new AppError(HtppStatus.BAD_REQUEST,"Body invalid")
        const userResponse = await this.createUserUseCase.execute({email,name,password});
        const {password:_, ...user} = userResponse

        return res.status(HtppStatus.CREATED).json({
            status_code:HtppStatus.CREATED,
            message:"User created",
            user
        })
    }
}