import { NextFunction, Request, Response } from 'express';
import { IOrder } from '../models/interface/IOrder';
import { OrderFilter } from '../models/interface/IOrderFilter';
import { OrderService } from "../services/OrderServices";
import { IOrderController } from './interface/IOrderController';

export class OrderController implements IOrderController {

    private orderService: OrderService;

    constructor() {
        this.orderService = new OrderService();
    }
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            var orders: IOrder[] = <IOrder[]>req.body;
            var createdOrders = await this.orderService.insertBulk(orders);
            res.status(201).send({ status: true, result: createdOrders });
        } catch (error) {
            next(error);
        }
    }
    async search(req: Request, res: Response, next: NextFunction) {
        try {
            var filterModel: OrderFilter = <OrderFilter>req.body;
            var filteredOrders = await this.orderService.filterOrders(filterModel);
            res.status(200).send({ status: true, result: filteredOrders });
        } catch (error) {
            next(error);
        }
    }
}