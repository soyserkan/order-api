import express, { Application, Router } from "express";
import { errorHandlerMiddleware } from "./middlewares/error-handler";
import mongoose from 'mongoose';
import OrderRoute from "./routes/OrderRoute";
import * as cors from 'cors';
import helmet from "helmet";
import swaggerUI from "swagger-ui-express";

const swaggerDoc = require("../swagger.json");

export class App {
    private app: Application;
    constructor(private port: number) {
        this.app = express();
        this.middlewares();
        this.routes();
    }
    private middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(cors.default());
        this.app.use(helmet());
    }
    async mongoose(url: string) {
        try {
            if (url) {
                await mongoose.connect(url);
                console.log('[MongoDB] connection successful');
            } else {
                console.error('[MongoDB] connection uri not found');
            }
        } catch (error) {
            console.error('[MongoDB] connection error: ' + error);
            process.exit(1);
        }
    }
    private routes() {
        const router: Router = express.Router();
        this.app.use("/", router);
        this.app.use('/api/orders', OrderRoute);
        this.app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));
        this.app.use(errorHandlerMiddleware);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server => listening to port: ${this.port}!`);
        });
    }
}