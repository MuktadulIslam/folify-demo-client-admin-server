/**
 * File: src/routes/student.routes.ts
 * Description: Student API routes with authentication and validation
 */

import { Router } from 'express';
import {
    getStudents,
    createStudent,
    getStudentById,
    updateStudent,
    deleteStudent
} from '../controllers/student.controller';
import { validate } from '../middleware/validation.middleware';
import { createStudentSchema, updateStudentSchema } from '../validators';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

// All routes require authentication
router.use(authMiddleware);

router.get('/', getStudents);
router.post('/create', validate(createStudentSchema), createStudent);
router.get('/:id', getStudentById);
router.put('/:id/update', validate(updateStudentSchema), updateStudent);
router.delete('/:id/delete', deleteStudent);

export default router;