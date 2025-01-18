import { CustomError } from "./error.custom";

export class ForbiddenError extends CustomError {
    statusCode = 403;

    constructor(message: string) {
        super(message);
    }

    serializeError = () => [{ message: this.message }];
}
