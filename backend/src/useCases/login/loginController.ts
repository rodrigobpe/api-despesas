import { Request, Response } from "express";
import LoginUseCase from "./loginUseCase";
import { HtppStatus } from "../../httpStatus";

export default class LoginController{
    constructor(private readonly loginUseCase:LoginUseCase){}
    async handle(req:Request,res:Response):Promise<Response>{
        const {email,password} = req.body
        const tokenResponse = await this.loginUseCase.execute({email,password})
        return res.status(HtppStatus.CREATED).json(tokenResponse)
    }
}