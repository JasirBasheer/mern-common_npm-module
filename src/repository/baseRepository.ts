import { Document, FilterQuery, Model, QueryOptions, UpdateQuery } from "mongoose";
import { IBaseRepository } from "./IBaseRepository";

export class BaseRepository<T extends Document> implements IBaseRepository<T> {
    protected readonly model: Model<T>;

    constructor(model: Model<T>) {
        this.model = model;
    }


    async find(query: FilterQuery<T>): Promise<T[] | []> {
        try {
            return await this.model.find(query).exec();
        } catch (err: any) {
            return [];
        }
    }

    async findOne(query: FilterQuery<T>): Promise<T | null> {
        try {
            return await this.model.findOne(query).exec();
        } catch (err: any) {
            return null;
        }
    }


    async create(data: Partial<T>): Promise<T | null> {
        try {
            const createdDocument = new this.model(data);
            return await createdDocument.save();
        } catch (err: any) {
            return null;
        }
    }


    async update(query: FilterQuery<T>, data: UpdateQuery<T>, option?: QueryOptions): Promise<T | null> {
        try {
            const updatedDocument = await this.model.findOneAndUpdate(query, data, option? option : {});
            return updatedDocument;
        } catch (err: any) {
            return null;
        }
    }

    async delete(query: FilterQuery<T>): Promise<T | null> {
        try {
            const deletedDocument = await this.model.findOneAndDelete(query);
            return deletedDocument;
        } catch (err: any) {
            return null;
        }
    }
}
