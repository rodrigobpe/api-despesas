import { Router } from "express";
import {loginRouter} from "./loginRoute";
import { userRoute } from "./userRoute";
import { billRouter } from "./billRouter";
import { isAuthenticated } from "../middlewares/isAuthenticated";

// criando o roteador
const router = Router()

//utilizando o roteador
router.use('/api/login',loginRouter)
router.use('/api/users',userRoute)
router.use('/api/bills',isAuthenticated,billRouter)

export default router

