/**
 * File: src/middleware/auth.middleware.ts
 * Description: JWT authentication middleware for protected routes
 */

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
    userId?: string;
}

export const authMiddleware = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
): void => {
    try {
        const token = req.cookies.authToken;

        if (!token) {
            res.status(401).json({
                success: false,
                message: 'Authentication token required'
            });
            return;
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
        req.userId = decoded.userId;

        next();
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            res.status(401).json({
                success: false,
                message: 'Token expired'
            });
            return;
        }

        res.status(401).json({
            success: false,
            message: 'Invalid token'
        });
    }
};