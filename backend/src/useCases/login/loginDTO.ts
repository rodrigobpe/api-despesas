export interface LoginDTO{
    email:string
    password:string
}

export interface LoginResponseDTO{
    user:{
        email:string
        name:string
    },
    token:string
}