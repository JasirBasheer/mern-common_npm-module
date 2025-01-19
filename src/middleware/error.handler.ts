import { Request, Response, NextFunction } from 'express';
import { BaseError } from '../errors/error.base';

export const errorHandler = (
    err: any, 
    req: Request, 
    res: Response, 
    next: NextFunction
): void => {
    console.error('Error:', err.message || err);

    if (err.message === "Invalid Token") {
        res.clearCookie('accessToken', { httpOnly: true, secure: false });
        res.clearCookie('refreshToken', { httpOnly: false, secure: false });
    }

    if (err instanceof BaseError) {
        console.log(err);
        res.status(err.statusCode).json({ message:err.message });
    } else {
        res.status(500).json({
            message: err.message || "Something went wrong",
        });
    }
};
