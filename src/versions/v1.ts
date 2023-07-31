import { Router } from 'express';

const route: Router = Router();

route.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to your test server!',
  });
});

export { route as v1 };
