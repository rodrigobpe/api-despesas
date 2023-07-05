import { app } from "./app";

const server = app

server.listen(process.env.PORT, ()=> {
    console.log(`${new Date().toISOString()} - Servidor rodando na porta ${process.env.PORT}`);
    
})