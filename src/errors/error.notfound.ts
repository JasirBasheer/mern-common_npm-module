import { CustomError } from "./error.custom";

export class NotFoundError extends CustomError {
    statusCode = 404;

    constructor(message: string) {
        super(message);
    }

    serializeError = () => [{ message: this.message }];
}
