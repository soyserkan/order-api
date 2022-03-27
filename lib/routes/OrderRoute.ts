import { Router } from 'express';
import { OrderController } from '../controllers/OrderController';
import { ordersBulkCreate, ordersFilter } from '../middlewares/request-validations';

class OrderRouter {
    router: Router;
    private orderController: OrderController;
    constructor() {
        this.router = Router();
        this.orderController = new OrderController();
        this.routes();
    }
    public routes() {
        this.router.post('/create', ordersBulkCreate, this.orderController.create.bind(this.orderController));
        this.router.post('/filter', ordersFilter, this.orderController.search.bind(this.orderController));
    }
}

const orderRoutes = new OrderRouter();
orderRoutes.routes();
export default orderRoutes.router;