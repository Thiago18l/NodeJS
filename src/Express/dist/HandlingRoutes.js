"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var PORT = process.env.PORT || 3000;
app.use('/add-product', function (req, res, next) {
    res.send("<h1>Add Product page </h1>");
    next();
}); // handling different routes
app.use('/', function (req, res, next) {
    res.send("<h1> Home page</h1>");
});
app.listen(PORT, function () {
    console.log("Running on port " + PORT);
});
