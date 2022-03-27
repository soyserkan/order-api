import { IOrder } from './interface/IOrder';
import { Schema, model } from "mongoose";
import { OrderStatus } from './enums/OrderStatus';

export var OrderSchema: Schema = new Schema(
    {
        Id: { type: Number, unique: true },
        BrandId: Number,
        Price: Number,
        StoreName: String,
        CustomerName: String,
        CreatedOn: { type: Date, default: Date.now },
        Status: { type: Number, default: OrderStatus.Created },
    },
    {
        toJSON: { transform(doc, ret) { delete ret._id } }, versionKey: false
    }
)

export default model<IOrder>("Order", OrderSchema);



