// using express router

import { Router } from 'express';

const routes = Router();

routes.get('/add-product', (req, res, next) => {
    console.log('In product view');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');

});
routes.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
    
});

export default routes; // export default for typescript