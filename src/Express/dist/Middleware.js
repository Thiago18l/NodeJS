"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var PORT = process.env.PORT || 3000;
app.use(function (req, res, next) {
    console.log('Im the middleware');
    next();
});
app.use(function (req, res, next) {
    console.log("In another middleware");
    next();
});
app.use(function (req, res, next) {
    console.log("Last Middleware");
    res.send("The last Middleware...");
});
app.listen(PORT, function () { return console.log("running app on port " + PORT); });
