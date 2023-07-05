import { User } from "../entities/User";

export default interface UserRepository{
    create({email,isAdmin,name,password}:User):Promise<User>
    getById({id}:Partial<User>):Promise<Partial<User> | null>
    getByEmail({email}:Partial<User>):Promise<User | null>
    getAll():Promise<Partial<User>[] | null>
    delete({id}:Partial<User>):Promise<void>
    update({id,isAdmin,name,password}:Partial<User>):Promise<User>
    
}