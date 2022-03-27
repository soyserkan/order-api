import { Request, Response, NextFunction } from "express";

export function errorHandlerMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
    res.status(400).send({ status: false, message: err.message });
    next();
}