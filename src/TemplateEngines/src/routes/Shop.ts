//route for shop
import * as path from 'path';
import { Router } from 'express';

//import products
import * as AdminData from './Admin';

const routes = Router();

routes.get('/', (req, res, next) => {
    console.log('Shop:', AdminData.products);
    res.sendFile(path.join(__dirname, '..','views', 'shop.html'));
});


export default routes;