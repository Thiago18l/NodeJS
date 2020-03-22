"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true })); // important 
var PORT = process.env.PORT || 3000;
app.use('/add-product', function (req, res, next) {
    console.log('In product view');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
});
app.use('/product', function (req, res, next) {
    console.log(req.body);
    res.redirect('/');
});
app.use('/', function (req, res, next) {
    res.send('<h1>Hello from you home page</h1>');
});
app.listen(PORT, function () {
    console.log("Running app on port " + PORT);
});
