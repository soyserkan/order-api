import * as mongoose from 'mongoose';
import { IOrder } from '../../models/interface/IOrder';
import { OrderFilter } from '../../models/interface/IOrderFilter';
import { IBaseRepository } from './IBaseRepository';


export interface IOrderRepository extends IBaseRepository<IOrder> {
    insertOrderBulk(orders: IOrder[]): Promise<mongoose.Document[]>;
    filterOrders(filters: OrderFilter): Promise<mongoose.Document[]>;
}
