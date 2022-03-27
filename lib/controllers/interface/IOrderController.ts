import { RequestHandler } from 'express';

export interface IOrderController {
    create: RequestHandler;
    search: RequestHandler;
}