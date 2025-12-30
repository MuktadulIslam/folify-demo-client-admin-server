/**
 * File: src/routes/auth.routes.ts
 * Description: Authentication routes for login and logout
 */

import { Router } from 'express';
import { loginController, logoutController } from '../controllers/auth.controller';
import { validate } from '../middleware/validation.middleware';
import { loginSchema } from '../validators';

const router = Router();

router.post('/login', validate(loginSchema), loginController);
router.post('/logout', logoutController);

export default router;