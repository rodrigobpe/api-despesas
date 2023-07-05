import Bill from "../entities/Bill";

export default interface BillRepository{
    create({id,billId,date,price,title}:Bill):Promise<Bill | unknown>
    getByID({id}:Partial<Bill>):Promise<Bill | null>
    getAll():Promise<Bill | null>
    update({billId,date,id,price,title}:Partial<Bill>):Promise<Bill>
    delete({id}:Partial<Bill>):Promise<Bill>
}