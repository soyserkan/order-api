import mongoose from "mongoose";

export interface IBaseRepository<T> {
    retrieve(items: T[]): Promise<mongoose.Document[]>;
    findById(id: mongoose.Types.ObjectId): Promise<mongoose.Document | null>;
    create(item: T): Promise<mongoose.Document>;
    update(id: mongoose.Types.ObjectId, item: T): Promise<mongoose.Document>;
    delete(id: mongoose.Types.ObjectId): Promise<mongoose.Document>;
}