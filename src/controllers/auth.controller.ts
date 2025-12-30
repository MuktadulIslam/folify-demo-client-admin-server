/**
 * File: src/controllers/auth.controller.ts
 * Description: Authentication controller for login and logout
 */

import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const loginController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { password } = req.body;

        // Check static password
        if (password !== process.env.STATIC_PASSWORD) {
            res.status(401).json({
                success: false,
                message: 'Invalid password'
            });
            return;
        }

        // Generate JWT token valid for 12 hours
        const token = jwt.sign(
            { userId: 'admin-user' },
            process.env.JWT_SECRET!,
            { expiresIn: '12h' }
        );

        // Set secure HTTP-only cookie
        res.cookie('authToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 12 * 60 * 60 * 1000 // 12 hours
        });

        res.status(200).json({
            success: true,
            message: 'Login successful',
            data: {
                token,
                expiresIn: '12h'
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

export const logoutController = async (req: Request, res: Response): Promise<void> => {
    try {
        res.clearCookie('authToken');
        res.status(200).json({
            success: true,
            message: 'Logout successful'
        });
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};