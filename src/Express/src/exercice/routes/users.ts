import { Router } from 'express';
import * as path from 'path';

const routes = Router();

routes.get('/users', (req, res) =>{
    res.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
});

routes.post('/users', (req, res) => {
    res.redirect('/');
});

export default routes;