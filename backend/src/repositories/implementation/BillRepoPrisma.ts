import { db } from "../../db";
import Bill from "../../entities/Bill";
import BillRepository from "../BillRepository";

export default class BillRepoPrisma implements BillRepository{
    async getByUser({ userId }: Partial<Bill>): Promise<Bill[] | unknown[]> {
        return await db.bill.findMany({where:{userId}})
    }
    async create({ userId, date, price, title }: Bill): Promise<Bill | unknown> {
        return await db.bill.create({
            data:{date,price,userId,title}
        })
    }
    async getByID({ id }: Partial<Bill>): Promise<Bill | unknown> {
        return await db.bill.findFirst({where:{id}})
    }
    async getAll(): Promise<Bill[]> {
        throw new Error("Method not implemented.");
    }
    async update({ userId, date, id, price, title }: Partial<Bill>): Promise<Bill | unknown> {
        return await db.bill.update(
            {data:{date,price,title}, where:{id}}
        )
    }
    async delete({ id }: Partial<Bill>): Promise<void> {
        await db.bill.delete({where:{id}})
    }

}