import { Router } from 'express';
import { getHealth } from '../controllers/healthController';

const router = Router();

// @route   GET /api/health
// @desc    Get API health status
// @access  Public
router.get('/', getHealth);

export default router;