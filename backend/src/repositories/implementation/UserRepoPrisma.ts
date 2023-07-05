import { db } from "../../db";
import { User } from "../../entities/User";
import UserRepository from "../../repositories/UserRepository";

export default class UserRepoPrisma implements UserRepository {
    async getById({ id }: Partial<User>): Promise<Partial<User> | null> {
        return await db.user.findFirst({
            where:{id}
        })
    }
    async create({ id, email, isAdmin, name, password }: User): Promise<User> {
        return await db.user.create({
            data: {
                email, isAdmin, id, name, password
            }
        })
    }

    async getByEmail({ email }: Partial<User>): Promise<User | null> {
        return await db.user.findUnique({
            where:{email},
        })
    }
    async getAll(): Promise<Partial<User>[] | null> {
        return await db.user.findMany({
            select:{
                id:true,
                email:true,
                name:true,
                password:false,
                isAdmin:true,
                bill:true
            },
            orderBy:{
                email:"asc"
            }
        })
    }

    async delete({ id }: Partial<User>): Promise<void> {
        await db.user.delete({where:{id}})
    }
    async update({ id, isAdmin, name, password }: Partial<User>): Promise<User> {
        const user = await db.user.update({
            data:{isAdmin,name,password},
            where:{id}
        })

        return user
    }
}