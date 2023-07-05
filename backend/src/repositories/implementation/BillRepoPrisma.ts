import { db } from "../../db";
import Bill from "../../entities/Bill";
import BillRepository from "../BillRepository";

export default class BillRepoPrisma implements BillRepository{
    async create({ billId, date, price, title }: Bill): Promise<Bill | unknown> {
        return await db.bill.create({
            data:{date,price,billId,title}
        })
    }
    async getByID({ id }: Partial<Bill>): Promise<Bill> {
        throw new Error("Method not implemented.");
    }
    async getAll(): Promise<Bill> {
        throw new Error("Method not implemented.");
    }
    async update({ billId, date, id, price, title }: Partial<Bill>): Promise<Bill> {
        throw new Error("Method not implemented.");
    }
    async delete({ id }: Partial<Bill>): Promise<Bill> {
        throw new Error("Method not implemented.");
    }

}