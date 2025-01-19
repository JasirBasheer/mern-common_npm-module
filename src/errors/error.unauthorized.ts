import { BaseError } from "./error.base";

export class UnauthorizedError extends BaseError {
    statusCode = 401;

    constructor(message: string) {
        super(message);
    }

    serializeError = () => ({ message: this.message });
}
