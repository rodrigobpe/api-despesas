import { Router } from "express";
import {loginRouter} from "./loginRoute";
import { userRoute } from "./userRoute";

// criando o roteador
const router = Router()

//utilizando o roteador
router.use('/api/login',loginRouter)
router.use('/api/users',userRoute)

export default router

