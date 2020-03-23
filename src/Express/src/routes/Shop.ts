//route for shop
import * as path from 'path';
import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../','views', 'shop.html'));
});


export default routes;