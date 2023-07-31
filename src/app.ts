import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import httpStatus from 'http-status';
import logger from 'morgan';
import globalErrorHandler from './errors/globalErrorHandler';
import { throwResponse } from './util/throwResponse';
import { v1 } from './versions/v1';

const app: Application = express();

const options: express.RequestHandler[] = [
  cors({
    origin: '*',
    methods: '*',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
  helmet(),
  logger('dev'),
  express.json({ limit: '50mb' }),
  express.urlencoded({ extended: true }),
];

app.use(options);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Welcome to your test server!',
  });
});

// v1 APIs route
app.use('/api/v1', v1);

// app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Global Error Handler
app.use(globalErrorHandler);

// 404 handler
app.all('*', (req: Request, res: Response) => {
  throwResponse(
    res,
    null,
    httpStatus.NOT_FOUND,
    `Can't find ${req.originalUrl} on this server!`,
    false,
  );
});

export default app;
