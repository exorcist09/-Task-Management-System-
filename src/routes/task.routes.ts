import { Router } from 'express';
import {
  createTask,
  deleteTask,
  getTaskById,
  getTasks,
  updateTask,
} from '../controllers/task.controller';
import { validate } from '../middlewares/validation';
import { z } from 'zod';

const router = Router();

// Zod schema to validate the req body for creating/updating a task
const taskSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  status: z.enum(['PENDING', 'IN_PROGRESS', 'COMPLETED']),
});


// route handlers for the API endpoints
router.post('/tasks', validate(taskSchema), createTask);
router.get('/tasks', getTasks);
router.get('/tasks/:id', getTaskById);
router.put('/tasks/:id', validate(taskSchema), updateTask);
router.delete('/tasks/:id', deleteTask);

export default router;
