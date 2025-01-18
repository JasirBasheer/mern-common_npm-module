import { CustomError } from "./error.custom";

export class ConflictError extends CustomError {
    statusCode = 409;

    constructor(message: string) {
        super(message);
    }

    serializeError = () => [{ message: this.message }];
}
