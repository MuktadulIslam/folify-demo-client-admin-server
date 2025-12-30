/**
 * File: src/routes/api.routes.ts
 * Description: Main API routes for courses, batches, branches, admissions, coupons, and blogs
 */

import { Router } from 'express';
import {
    getCourses,
    createCourse,
    getCourseById,
    updateCourse,
    getBatches,
    createBatch,
    updateBatch,
    deleteBatch,
    getCourseStreams,
    createCourseStream,
    updateCourseStream,
    getBranches,
    createBranch,
    updateBranch,
    deleteBranch,
    getAdmissions,
    createAdmission,
    getAdmissionById,
    updateAdmission,
    deleteAdmission,
    getPayments,
    getCoupons,
    createCoupon,
    updateCoupon,
    deleteCoupon,
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog
} from '../controllers/other.controller';
import { validate } from '../middleware/validation.middleware';
import {
    createCourseSchema,
    updateCourseSchema,
    createBatchSchema,
    updateBatchSchema,
    createCourseStreamSchema,
    updateCourseStreamSchema,
    createBranchSchema,
    updateBranchSchema,
    createAdmissionSchema,
    updateAdmissionSchema,
    createCouponSchema,
    updateCouponSchema,
    createBlogSchema,
    updateBlogSchema
} from '../validators';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

// All routes require authentication
router.use(authMiddleware);

// ============= COURSE ROUTES =============
router.get('/course', getCourses);
router.post('/course/create', validate(createCourseSchema), createCourse);
router.get('/course/:id', getCourseById);
router.put('/course/:id/update', validate(updateCourseSchema), updateCourse);

// Batch routes under course
router.get('/course/:id/batches', getBatches);
router.post('/course/:id/batches/create', validate(createBatchSchema), createBatch);
router.put('/course/:courseId/batches/:batchId/update', validate(updateBatchSchema), updateBatch);
router.delete('/course/:courseId/batches/:batchId/delete', deleteBatch);

// ============= COURSE STREAM ROUTES =============
router.get('/course-stream', getCourseStreams);
router.post('/course-stream/create', validate(createCourseStreamSchema), createCourseStream);
router.put('/course-stream/:id/update', validate(updateCourseStreamSchema), updateCourseStream);

// ============= BRANCH ROUTES =============
router.get('/branch', getBranches);
router.post('/branch/create', validate(createBranchSchema), createBranch);
router.put('/branch/:id/update', validate(updateBranchSchema), updateBranch);
router.delete('/branch/:id/delete', deleteBranch);

// ============= ADMISSION ROUTES =============
router.get('/admission', getAdmissions);
router.post('/admission/create', validate(createAdmissionSchema), createAdmission);
router.get('/admission/:id', getAdmissionById);
router.put('/admission/:id/update', validate(updateAdmissionSchema), updateAdmission);
router.delete('/admission/:id/delete', deleteAdmission);

// ============= PAYMENT ROUTES =============
router.get('/payment', getPayments);

// ============= COUPON ROUTES =============
router.get('/coupon', getCoupons);
router.post('/coupon/create', validate(createCouponSchema), createCoupon);
router.put('/coupon/:id/update', validate(updateCouponSchema), updateCoupon);
router.delete('/coupon/:id/delete', deleteCoupon);

// ============= BLOG ROUTES =============
router.get('/blog', getBlogs);
router.post('/blog/create', validate(createBlogSchema), createBlog);
router.put('/blog/:id/update', validate(updateBlogSchema), updateBlog);
router.delete('/blog/:id/delete', deleteBlog);

export default router;