"use strict";
// time to practice - express.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var PORT = process.env.PORT || 3000;
app.use('/users', function (req, res, next) {
    console.log('Oi da pagina de usuários');
    res.send("<h1>Você está na página de Usuários</h1>");
});
app.use('/', function (req, res, next) {
    console.log('Oi da página inicial');
    res.send("<h1>Oi da página inicial. </h1>");
});
app.listen(PORT, function () {
    console.log("App is running on port: " + PORT);
});
