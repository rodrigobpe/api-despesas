import { compareSync } from "bcrypt";
import jwt from 'jsonwebtoken'
import AppError from "../../errors/AppError";
import UserRepository from "../../repositories/UserRepository";
import {LoginDTO,LoginResponseDTO} from "./loginDTO";

export default class LoginUseCase{
    constructor(private readonly useRepo:UserRepository){}
    async execute({email,password}:LoginDTO):Promise<LoginResponseDTO>{
        const user = await this.useRepo.getByEmail({email})
        if(!user){throw new AppError(401, "E-mail or password incorrects")}
        const passwordMatch = compareSync(password, user.password)
        if(!passwordMatch){throw new AppError(401, "E-mail or password incorrects")}

        const token = jwt.sign({id:user.id}, process.env.JWT_TOKEN ?? "", {
            subject: user.id,
            expiresIn: '6h'
        })

        const tokenResponse:LoginResponseDTO = {
            user:{
                email:user.email,
                name:user.name
            },
            token
        }

        return tokenResponse
    }
}