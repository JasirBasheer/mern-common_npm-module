import { BaseError } from "./error.base";

export class CustomError extends BaseError {
    statusCode: number;

    constructor(message: string, status: number) {
        super(message);
        this.statusCode = status;
    }

    serializeError = () => ({ message: this.message });
}
