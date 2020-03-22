//route for shop

import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res, next) => {
    res.send('<h1> Hello from Home page of your best shop </h1>');
});

export default routes;