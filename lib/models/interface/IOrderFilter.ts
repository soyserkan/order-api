import { OrderStatus } from "../enums/OrderStatus";

export interface OrderFilter {
    PageSize: number;
    PageNumber: number;
    SearchText: string;
    StartDate: Date;
    EndDate: string;
    Statuses: OrderStatus[];
    SortBy: "Id" | "BrandId" | "Price" | "StoreName" | "CustomerName" | "CreatedOn" | "Status";
}