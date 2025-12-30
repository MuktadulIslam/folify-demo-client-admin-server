/**
 * File: src/config/env.config.ts
 * Description: Centralized configuration file for all environment variables
 */

import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

interface Config {
    port: number;
    jwtSecret: string;
    nodeEnv: string;
    admin: {
        email: string;
        password: string;
    };
}

const config: Config = {
    port: parseInt(process.env.PORT || '3000', 10),
    jwtSecret: process.env.JWT_SECRET || 'default_jwt_secret',
    nodeEnv: process.env.NODE_ENV || 'development',
    admin: {
        email: process.env.ADMIN_EMAIL || 'admin@gmail.com',
        password: process.env.STATIC_PASSWORD || ''
    }
};

// Validate required configuration
const validateConfig = (): void => {
    const requiredFields = [
        { key: 'jwtSecret', value: config.jwtSecret, name: 'JWT_SECRET' },
        { key: 'admin.password', value: config.admin.password, name: 'STATIC_PASSWORD' }
    ];

    const missingFields = requiredFields.filter(field => !field.value);

    if (missingFields.length > 0) {
        const missing = missingFields.map(f => f.name).join(', ');
        console.warn(`Warning: Missing required environment variables: ${missing}`);
    }
};

validateConfig();

export default config;
