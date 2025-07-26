import express from 'express';
import taskRoutes from './routes/task.routes';
import swaggerUi from 'swagger-ui-express';
import { swaggerOptions } from './swagger/swagger';

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.send(`
    <div style="font-family: sans-serif; padding: 2rem;">
      <h1>✅ Task Management System</h1>
      <p>Welcome to the Task Management System API built with Node.js, Express, TypeScript</p>
      <ul>
        <li><a href="/docs">API Docs (Swagger)</a></li>
        <li><a href="/tasks">View All Tasks (Raw JSON)</a></li>
      </ul>
    </div>
  `);
});

app.use(taskRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions));

export default app;
