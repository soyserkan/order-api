import { Request, Response, NextFunction } from "express";
import Joi, { ValidationResult } from "joi";


export function ordersBulkCreate(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.array().items(
        Joi.object({
            Id: Joi.number().required(),
            BrandId: Joi.number().required(),
            Price: Joi.number().required(),
            StoreName: Joi.string().required(),
            CustomerName: Joi.string().required(),
            CreatedOn: Joi.date(),
            Status: Joi.number()
        }).required()
    ).required();
    const result = schema.validate(req.body) as ValidationResult;
    if (!result) {
        throw new Error("Invalid body");
    }
    if (result && result.error) {
        throw new Error(result.error.details?.map(x => x.message)?.[0]);
    }
    next();
}
export function ordersFilter(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
        PageSize: Joi.number().min(1).default(10),
        PageNumber: Joi.number().min(1),
        SearchText: Joi.string(),
        StartDate: Joi.date(),
        EndDate: Joi.date(),
        Statuses: Joi.array().items(Joi.number().valid(10, 20, 30, 40, 50, 60)),
        SortBy: Joi.string().valid("Id", "BrandId", "Price", "StoreName", "CustomerName", "CreatedOn", "Status")
    }).required();
    const result = schema.validate(req.body) as ValidationResult;
    if (!result) {
        throw new Error("Invalid body");
    }
    if (result && result.error) {
        throw new Error(result.error.details?.map(x => x.message)?.[0]);
    }
    next();
}