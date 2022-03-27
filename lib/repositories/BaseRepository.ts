import mongoose = require("mongoose");
import { IBaseRepository } from "./interface/IBaseRepository";

class BaseRepository<T extends mongoose.Document> implements IBaseRepository<T>{

    private _model: mongoose.Model<T>;

    constructor(schemaModel: mongoose.Model<T>) {
        this._model = schemaModel;
    }
    async create(item: T): Promise<mongoose.Document> {
        return await this._model.create(item);
    }
    async retrieve(): Promise<mongoose.Document[]> {
        return await this._model.find({});
    }
    async update(id: mongoose.Types.ObjectId, item: any): Promise<any> {
        return await this._model.findByIdAndUpdate(id, item);
    }
    async delete(id: mongoose.Types.ObjectId): Promise<mongoose.Document> {
        return await this._model.remove(id);
    }
    async findById(id: mongoose.Types.ObjectId): Promise<mongoose.Document | null> {
        return await this._model.findById(id);
    }
}

export = BaseRepository;
