import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";
import { HtppStatus } from "../httpStatus";


const errorHandlingMiddleware = (error:AppError,req:Request,res:Response,next:NextFunction) =>{
    const status_code = error.statusCode || HtppStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || 'Internal server error';
    console.log(error);

    return res.status(status_code).json({
        status_code,
        message,
        timeStamp: new Date()
    })   
}

export default errorHandlingMiddleware