// using express router
import * as path from 'path';
import { Router } from 'express';

const routes = Router();

routes.get('/add-product', (req, res, next) => {
    console.log('In product view');
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
    

});
routes.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
    
});

export default routes; // export default for typescript