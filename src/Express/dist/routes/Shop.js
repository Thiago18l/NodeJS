"use strict";
//route for shop
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes = express_1.Router();
routes.get('/', function (req, res, next) {
    res.send('<h1> Hello from Home page of your best shop </h1>');
});
exports.default = routes;
