import { BaseError } from "./error.base";

export class NotFoundError extends BaseError {
    statusCode = 404;

    constructor(message: string) {
        super(message);
    }

    serializeError = () => ({ error: this.message });
}
