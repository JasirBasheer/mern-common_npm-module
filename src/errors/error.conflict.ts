import { BaseError } from "./error.base";

export class ConflictError extends BaseError {
    statusCode = 409;

    constructor(message: string) {
        super(message);
    }

    serializeError = () => ({ message: this.message });
}
