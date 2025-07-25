import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../models/task.model';
import { tasks } from '../utils/store';

export const createTask = (req: Request, res: Response) => {
  const { title, description, status } = req.body;
  const newTask: Task = {
    id: uuidv4(),
    title,
    description,
    status,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const getTasks = (req: Request, res: Response) => {
  const { page = '1', limit = '10', status, title } = req.query;

  let filteredTasks = tasks;

  if (status) {
    filteredTasks = filteredTasks.filter(task => task.status === status);
  }

  if (title) {
    filteredTasks = filteredTasks.filter(task =>
      task.title.toLowerCase().includes((title as string).toLowerCase())
    );
  }

  const pageInt = parseInt(page as string, 10);
  const limitInt = parseInt(limit as string, 10);

  const start = (pageInt - 1) * limitInt;
  const paginatedTasks = filteredTasks.slice(start, start + limitInt);

  res.json({
    total: filteredTasks.length,
    page: pageInt,
    limit: limitInt,
    data: paginatedTasks,
  });
};

export const getTaskById = (req: Request, res: Response) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
};

export const updateTask = (req: Request, res: Response) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });

  Object.assign(task, req.body, { updatedAt: new Date().toISOString() });
  res.json(task);
};

export const deleteTask = (req: Request, res: Response) => {
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Task not found' });

  tasks.splice(index, 1);
  res.status(204).send();
};
