import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";


const errorHandlingMiddleware = (error:AppError,req:Request,res:Response,next:NextFunction) =>{
    const status = error.statusCode || 500;
    const message = error.message || 'Internal server error';
    console.log(error);

    return res.status(status).json({
        status,
        message,
        timeStamp: new Date()
    })   
}

export default errorHandlingMiddleware