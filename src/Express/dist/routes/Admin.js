"use strict";
// using express router
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes = express_1.Router();
routes.get('/add-product', function (req, res, next) {
    console.log('In product view');
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
});
routes.post('/add-product', function (req, res, next) {
    console.log(req.body);
    res.redirect('/');
});
exports.default = routes; // export default for typescript
