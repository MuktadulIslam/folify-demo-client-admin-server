/**
 * File: src/routes/admin.routes.ts
 * Description: Admin API routes with authentication and validation
 */

import { Router } from 'express';
import {
    getAdmins,
    createAdmin,
    getAdminById,
    updateAdmin,
    deleteAdmin
} from '../controllers/admin.controller';
import { validate } from '../middleware/validation.middleware';
import { createAdminSchema, updateAdminSchema } from '../validators';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

// All routes require authentication
router.use(authMiddleware);

router.get('/', getAdmins);
router.post('/create', validate(createAdminSchema), createAdmin);
router.get('/:id', getAdminById);
router.put('/:id/update', validate(updateAdminSchema), updateAdmin);
router.delete('/:id/delete', deleteAdmin);

export default router;