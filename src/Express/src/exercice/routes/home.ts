import { Router } from 'express';
import * as path from 'path';

const routes = Router();

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

export default routes;
