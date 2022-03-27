import { IOrder } from '../../models/interface/IOrder';
import { OrderFilter } from '../../models/interface/IOrderFilter';
import { IBaseServices } from './IBaseServices';


export interface IOrderServices extends IBaseServices<IOrder> {
    insertBulk(orders: IOrder[]): Promise<IOrder[]>;
    filterOrders(filters: OrderFilter): Promise<IOrder[]>;
}
