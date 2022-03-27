import { IOrder } from "../models/interface/IOrder";
import { OrderFilter } from "../models/interface/IOrderFilter";
import { OrderRepository } from "../repositories/OrderRepositories";
import { IOrderServices } from "./interface/IOrderServices";

export class OrderService implements IOrderServices {
    private orderRepository: OrderRepository
    constructor() {
        this.orderRepository = new OrderRepository();
    }
    async insertBulk(data: IOrder[]): Promise<IOrder[]> {
        return this.orderRepository.insertOrderBulk(data);
    }
    async filterOrders(filters: OrderFilter): Promise<IOrder[]> {
        return this.orderRepository.filterOrders(filters);
    }
}