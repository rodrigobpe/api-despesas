import Bill from "../entities/Bill";

export default interface BillRepository{
    create({id,userId,date,price,title}:Bill):Promise<Bill | unknown>
    getByID({id}:Partial<Bill>):Promise<Bill | unknown>
    getAll():Promise<Bill[]>
    update({userId,date,id,price,title}:Partial<Bill>):Promise<Bill | unknown>
    delete({id}:Partial<Bill>):Promise<void>
    getByUser({userId}:Partial<Bill>):Promise<Bill[] | unknown[]>
}