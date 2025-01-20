import rateLimit from 'express-rate-limit';
import { Request, Response } from 'express';
import { SendResponse } from '../functions/response.send';

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 500, 
  handler: (req: Request, res: Response) => {
    console.log(`Rate limit exceeded: ${req.method} ${req.url}`)
    SendResponse(res,429,"You are blocked")
    
  },
});



