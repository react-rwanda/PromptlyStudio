import { Router } from 'express';
import { generateCode } from '../controllers/codegenController';

const router = Router();

// @route   POST /api/codegen
// @desc    Generate code from prompt
// @access  Private
router.post('/', generateCode);

export default router;