import { Document, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";

export interface IBaseRepository<T extends Document> {
    find(query: FilterQuery<T>): Promise<T[] | []>;
    findOne(query: FilterQuery<T>): Promise<T | null>;
    create(data: Partial<T>): Promise<T | null>;
    update(query: FilterQuery<T>, data: UpdateQuery<T>, option?: QueryOptions): Promise<T | null>;
    delete(query: FilterQuery<T>): Promise<T | null>;
}
