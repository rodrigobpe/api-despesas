import jwt from "jsonwebtoken";
import { Response,Request,NextFunction } from "express";
import AppError from "../errors/AppError";
import { db } from "../db";


type JWToken = {
    id: string
}


export const isAuthenticated = async (req:Request,res:Response,next:NextFunction) =>{
    const {authorization} = req.headers
    if(!authorization){
        throw new AppError(401, "Unauthorized, missing JWT")
    }

    const token = authorization.split(" ")[1]
    const {id} = jwt.verify(token, process.env.JWT_TOKEN ?? '') as JWToken
    const user = await db.user.findFirst({
        where:{
            id
        }
    })
    if(!user){
        throw new AppError(401, "Unauthorized user")
    }
    next()
}