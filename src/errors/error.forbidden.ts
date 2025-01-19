import { BaseError } from "./error.base";

export class ForbiddenError extends BaseError {
    statusCode = 403;

    constructor(message: string) {
        super(message);
    }

    serializeError = () => ({ message: this.message });
}
