import { Request, Response } from "express";
import LoginUseCase from "./loginUseCase";

export default class LoginController{
    constructor(private readonly loginUseCase:LoginUseCase){}
    async handle(req:Request,res:Response):Promise<Response>{
        const {email,password} = req.body
        const tokenResponse = await this.loginUseCase.execute({email,password})
        return res.status(201).json(tokenResponse)
    }
}