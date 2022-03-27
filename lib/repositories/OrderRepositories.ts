import Order from "../models/Order";
import { IOrder } from "../models/interface/IOrder";
import { IOrderRepository } from "./interface/IOrderRepositories";
import { OrderFilter } from "../models/interface/IOrderFilter";
import Base from "./BaseRepository";

export class OrderRepository extends Base<IOrder> implements IOrderRepository {
    constructor() {
        super(Order);
    }
    async insertOrderBulk(orders: IOrder[]): Promise<IOrder[]> {
        const filteredArray = orders.filter(x => x.BrandId !== 0);
        return await Order.insertMany(filteredArray);
    }
    async filterOrders(filters: OrderFilter): Promise<IOrder[]> {
        const { PageSize = 10, PageNumber = 1, SortBy, SearchText, StartDate, EndDate, Statuses } = filters;
        let whereClause: any = { $and: [] };
        if (SearchText) {
            let regex = new RegExp(SearchText, 'i');
            whereClause.$and.push({ $or: [{ StoreName: regex }, { CustomerName: regex }] })
        }
        if (StartDate) {
            whereClause.$and.push({ CreatedOn: { $gte: StartDate } })
        }
        if (EndDate) {
            whereClause.$and.push({ CreatedOn: { $lte: EndDate } })
        }
        if (Statuses) {
            whereClause.$and.push({ Status: Statuses })
        }
        const skip = (PageNumber > 1) ? PageSize * (PageNumber - 1) : 0;
        return await Order.find(whereClause).limit(PageSize).skip(skip).sort(SortBy);
    }
}