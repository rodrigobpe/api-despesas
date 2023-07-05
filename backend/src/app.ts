import 'express-async-errors'
import express from 'express'
import cors from 'cors'
require("dotenv").config()
import morgan from 'morgan'
import router from './router'
import errorHandlingMiddleware from './middlewares/errorHandlingMiddleware'



// criando o app
export const app = express()

// setando os middleweres

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(morgan('dev'))

// criando as rotas
app.use(router)

//middleware de erros
app.use(errorHandlingMiddleware)
