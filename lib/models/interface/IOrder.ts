import mongoose from 'mongoose';
import { OrderStatus } from '../enums/OrderStatus';

export interface IOrder extends mongoose.Document {
    Id: number;
    BrandId: number;
    Price: number;
    StoreName: string;
    CustomerName: string;
    CreatedOn: Date;
    Status: OrderStatus;
}