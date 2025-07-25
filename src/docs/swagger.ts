export const swaggerOptions = {
  openapi: '3.0.0',
  info: {
    title: 'Task Manager API',
    version: '1.0.0',
    description: 'A simple REST API for managing tasks',
  },
  paths: {
    '/tasks': {
      post: {
        summary: 'Create a new task',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  title: { type: 'string' },
                  description: { type: 'string' },
                  status: {
                    type: 'string',
                    enum: ['PENDING', 'IN_PROGRESS', 'COMPLETED'],
                  },
                },
              },
            },
          },
        },
        responses: {
          201: { description: 'Task created' },
        },
      },
      get: {
        summary: 'Get all tasks with optional pagination and filtering',
        parameters: [
          { name: 'page', in: 'query', schema: { type: 'integer' } },
          { name: 'limit', in: 'query', schema: { type: 'integer' } },
          { name: 'status', in: 'query', schema: { type: 'string' } },
          { name: 'title', in: 'query', schema: { type: 'string' } },
        ],
        responses: {
          200: { description: 'List of tasks' },
        },
      },
    },
    '/tasks/{id}': {
      get: { summary: 'Get task by ID' },
      put: { summary: 'Update task by ID' },
      delete: { summary: 'Delete task by ID' },
    },
  },
};
