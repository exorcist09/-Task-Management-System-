import express from 'express';
import taskRoutes from './routes/task.routes';
import swaggerUi from 'swagger-ui-express';
import { swaggerOptions } from './docs/swagger';

const app = express();
app.use(express.json());

app.use(taskRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions));

export default app;
